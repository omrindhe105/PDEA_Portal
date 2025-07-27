"use client"
import { Sidebar } from "@/components/ui/sidebaradmin"
import { Header } from "@/components/ui/adminheader"
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
// import { SubjectAttendance } from "./subject-attendence"
// import { Notifications } from "./notifications"
// import { Timetable } from "./timetable"
// import { LatestResults } from "./latest-results"
// import { AttendanceGraph } from "./attendence-graph"

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [attendance, setAttendance] = useState<{[key: string]: boolean}>({});

  const handleClassClick = (classId: string) => {
    if (selectedClass === classId) {
      setSelectedClass(null);
    } else {
      setSelectedClass(classId);
    }
  };

  const handleClearAttendance = () => {
    setAttendance({});
  };

  const handleAttendanceChange = (rollNo: string, value: boolean) => {
    setAttendance(prev => ({
      ...prev,
      [rollNo]: value
    }));
  };

  const handleSubmitAttendance = () => {
    console.log('Submitting attendance:', attendance);
    // Here you would typically send this to your backend
  };

  const classes = [
    { id: "SE_IT", name: "SE IT", students: 30, attendance: "80%", room: "101" },
    { id: "BE_IT", name: "BE IT", students: 28, attendance: "90%", room: "103" },
  ];

  return (
    <div className="flex font-figtree h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="flex flex-col h-screen gap-6 ">
            <h1 className="text-2xl font-bold">Your Classes</h1>
            <div className="bg- flex gap-5 align-middle items-center p-5 h-1/3">
              {classes.map((cls) => (
                <div 
                  key={cls.id}
                  onClick={() => handleClassClick(cls.id)}
                  className={`cursor-pointer hover:border-blue-500 flex-col gap-3 border h-full rounded-xl flex items-center justify-center text-white text-lg font-semibold p-4 ${
                    selectedClass === cls.id ? 'border-blue-500 bg-blue-500/10' : ''
                  }`}
                >
                  <p className="text-2xl">{cls.name}</p>
                  <p>Total No. Of Students: {cls.students}</p>
                  <p>Aggregate Attendance: {cls.attendance}</p>
                  <p>Room: {cls.room}</p>
                </div>
              ))}
              <div className="cursor-pointer gap-5 flex-col border h-full rounded-xl flex items-center justify-center text-white text-lg font-semibold p-4 border-green-600">
                <p className="text-xl">Add Class</p>
                <p className="text-sm text-center">Create a new class for your students</p>
                <CiCirclePlus className="w-16 h-16 text-white cursor-pointer hover:text-green-500 transition-colors" />

              </div>
            </div>
            <div className="lg:col-span-3 bg-[#1a1a1a] rounded-xl p-6">
              {selectedClass ? (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-white">Today's Attendance - {classes.find(c => c.id === selectedClass)?.name}</h2>
                    <button
                      onClick={handleClearAttendance}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-white">
                      <thead className="border-b border-gray-600">
                        <tr className="text-left">
                          <th className="pb-3 px-4">Roll No.</th>
                          <th className="pb-3 px-4">Name</th>
                          <th className="pb-3 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { roll: "1", name: "Aditya Sharma" },
                          { roll: "2", name: "Priya Patel" },
                          { roll: "3", name: "Rahul Mehta" },
                          { roll: "4", name: "Sneha Singh" },
                          { roll: "5", name: "Arjun Kumar" },
                          { roll: "6", name: "Ananya Gupta" },
                          { roll: "7", name: "Rohan Verma" },
                          { roll: "8", name: "Nisha Reddy" },
                          { roll: "9", name: "Kunal Shah" },
                          { roll: "10", name: "Meera Kapoor" },
                        ].map((student) => (
                          <tr key={student.roll} className="border-b border-gray-700 hover:bg-gray-800">
                            <td className="py-3 px-4">{student.roll}</td>
                            <td className="py-3 px-4">{student.name}</td>
                            <td className="py-3 px-4">
                              <label className="flex items-center space-x-2">
                                <input 
                                  type="checkbox" 
                                  checked={attendance[student.roll] || false}
                                  onChange={(e) => handleAttendanceChange(student.roll, e.target.checked)}
                                  className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-green-500 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-300">Present</span>
                              </label>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={handleSubmitAttendance}
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                      >
                        Submit Attendance
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-40">
                  <p className="text-gray-400 text-lg">Select a class to view students attendance</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
