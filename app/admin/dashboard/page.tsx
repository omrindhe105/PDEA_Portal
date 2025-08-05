"use client"

import { Header } from "@/components/ui/adminheader"
import AllClasses from "@/components/ui/classes";
// import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input"
// import {Checkbox } from "../../dashboard/ui/checkbox";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Input } from "@/app/dashboard/ui/input";
// import { Label } from "@/app/dashboard/ui/label";
// import { Clipboard, Check,CircleAlert,ChevronsRight, ChevronsLeft   } from 'lucide-react';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
//   TooltipProvider
// } from "@/components/ui/tooltip"

export default function AdminDashboard() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  // const [attendance, setAttendance] = useState<{[key: string]: boolean}>({});
  // const [showAddClass, setShowAddClass] = useState(false);
  // const [newClass, setNewClass] = useState({
  //   className: '',
  //   subject: ''
  // });

  const handleClassClick = (classId: string) => {
    // 
  };


  const classes = [
    { id: "SE_IT", name: "SE IT", students: 30, attendance: "80%", room: "101" },
    { id: "BE_IT", name: "BE IT", students: 28, attendance: "90%", room: "103" },
  ];

  return (
    <>
      <Header />
      <div className="flex w-full flex-col min-h-full gap-6 p-6">
        <div className="flex justify-between">
        <h1 className="text-2xl font-bold">All Classes</h1>
        <div><div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search Classes..." className="pl-10 w-64" />
        </div></div>
        </div>
        <AllClasses />
      </div>
    </>
  )
}
