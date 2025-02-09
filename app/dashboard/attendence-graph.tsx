"use client";
import { Button, buttonVariants } from "./ui/button";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { Bot, Loader } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { 
  ChartConfig, 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "./ui/chart";
import { subjects } from "./subject-attendence";

// Convert subjects to pie chart format with original color scheme
const subjectAttendance = subjects.map(subject => ({
  subject: subject.name, 
  attendance: subject.attendance, 
  fill: subject.name === "TOC" 
    ? "hsl(214, 84%, 56%)"  // Bright Blue for TOC
    : subject.name === "BCN" 
    ? "hsl(142, 11%, 45%)"  // Green for BCN
    : subject.name === "Internship" 
    ? "hsl(0, 84%, 70%)"    // Red for Internship
    : subject.name === "CyberSecurity" 
    ? "hsl(270, 67%, 58%)"  // Purple for CyberSecurity
    : "hsl(35, 91%, 59%)"   // Orange for WAD
}));

// Chart configuration
const chartConfig = {
  attendance: { label: "Attendance" },
  toc: { label: "TOC", color: "hsl(214, 84%, 56%)" },
  bcn: { label: "BCN", color: "hsl(142, 71%, 45%)" },
  internship: { label: "Internship", color: "hsl(0, 84%, 60%)" },
  cybersecurity: { label: "CyberSecurity", color: "hsl(270, 67%, 58%)" },
  wad: { label: "WAD", color: "hsl(35, 91%, 59%)" },
} satisfies ChartConfig;

export function AttendanceGraph() {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState("");

  // Calculate total and average attendance
  const totalAttendance = React.useMemo(() => {
    return Math.round(subjectAttendance.reduce((acc, curr) => acc + curr.attendance, 0) / subjectAttendance.length);
  }, []);

  const getAttendanceColor = (attendance: number) => {
    if (attendance < 50) return "red";
    if (attendance < 75) return "yellow";
    return "green";
  };
  

  // // Fetch AI-generated lecture recovery plan
  // const fetchAttendanceAdvice = async () => {
  //   setLoading(true);
  //   setResult(""); // Clear previous result

  //   try {
  //     const chatRes = await fetch("/api/gpt", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ attendance: totalAttendance }),
  //     });

  //     const data = await chatRes.json();
  //     setResult(data.message || "Error processing request.");
  //   } catch (error) {
  //     console.error("Error fetching AI data:", error);
  //     setResult("Something went wrong.");
  //   }

  //   setLoading(false);
  // };

  return (
    
    <Card className="flex flex-col relative">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Attendance Overview</CardTitle>
          <CardDescription>Semester Performance</CardDescription>
        </div>
        <div className="rounded-xl shadow-[0_0_10px_2px_rgba(138,43,226,0.4)]">
          <Button variant={"outline"} className="w-25 h-25 p-2">
            <Bot className="!size-10 text-[#B080FF] drop-shadow-[0_0_6px_rgba(186,104,255,0.7)]"/>
          </Button>
        </div>
        
      </CardHeader>
      
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={subjectAttendance}
              dataKey="attendance"
              nameKey="subject"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    const attendanceColor = getAttendanceColor(totalAttendance);
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} fill={attendanceColor} className="text-3xl font-bold">
                          {totalAttendance}%
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Average
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing overall attendance across subjects
        </div>
      </CardFooter>
    </Card>
  );
}
