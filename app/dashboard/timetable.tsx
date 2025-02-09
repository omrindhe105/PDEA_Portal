import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const timetable = [
  {
    time: "09:00 AM",
    monday: "Mathematics",
    tuesday: "Physics",
    wednesday: "Computer Science",
    thursday: "English",
    friday: "Chemistry",
  },
  {
    time: "11:00 AM",
    monday: "Physics",
    tuesday: "Computer Science",
    wednesday: "English",
    thursday: "Chemistry",
    friday: "Mathematics",
  },
  {
    time: "02:00 PM",
    monday: "Computer Science",
    tuesday: "English",
    wednesday: "Chemistry",
    thursday: "Mathematics",
    friday: "Physics",
  },
]

export function Timetable() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Timetable</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              {days.map((day) => (
                <TableHead key={day}>{day}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {timetable.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.time}</TableCell>
                <TableCell>{row[days[0].toLowerCase()]}</TableCell>
                <TableCell>{row[days[1].toLowerCase()]}</TableCell>
                <TableCell>{row[days[2].toLowerCase()]}</TableCell>
                <TableCell>{row[days[3].toLowerCase()]}</TableCell>
                <TableCell>{row[days[4].toLowerCase()]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
