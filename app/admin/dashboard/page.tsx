"use client"

import { Header } from "@/components/ui/adminheader"
import AllClasses from "@/components/ui/classes";
// import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
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
  // const [classCode, setClassCode] = useState<string | null>(null);
  // const [isCopied, setIsCopied] = useState(false);
  // const [showConfirmation, setShowConfirmation] = useState(false);
  // const [presentCount, setPresentCount] = useState(0);

  // const generateClassCode = () => {
  //   // random 6-digit code
  //   const code = Math.floor(100000 + Math.random() * 900000).toString();
  //   setClassCode(code);
  // };

  // const handleAddClass = () => {
  //   console.log('New class:', { ...newClass, code: classCode });
  //   setShowAddClass(false);
  //   setNewClass({ className: '', subject: '' });
  //   setClassCode(null);
  // };

  const handleClassClick = (classId: string) => {
    // 
  };


  const classes = [
    { id: "SE_IT", name: "SE IT", students: 30, attendance: "80%", room: "101" },
    { id: "BE_IT", name: "BE IT", students: 28, attendance: "90%", room: "103" },
  ];

  return (
    <div className="flex font-figtree h-screen">
      <div className="flex-1 z-50 flex flex-col overflow relative">
        <Header />
        <main className="flex-1 max-w-screen p-6">
          <div className="flex max-w-full flex-col min-h-full gap-6">
            <h1 className="text-2xl font-bold">All Classes</h1>
            <AllClasses  />


          </div>
        </main>
      </div>
    </div>
  )
}
