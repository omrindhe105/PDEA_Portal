import { Header } from "@/components/ui/adminheader";
import React from "react";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
export default function Teachers() {
  return (
    <div className="h-full w-full">
    <div>
      <Header/>
    </div>
    <div className="">
        <div className="lg:col-span-3 rounded-xl  p-4 md:p-6 flex justify-center flex-col">
                <div className="h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <h2 className="text-lg md:text-xl font-semibold text-white">Teachers&apos;s List</h2>
                    <Button
                                    variant="secondary"
                                    // onClick={handleNewNotice}
                                    className="dark:bg-green-500 justify-start"
                                    
                                  >
                                    {/* <Link href="/admin/dashboard/notices"> */}
                                      <UserPlus className="mr- h-5 w-5" />
                                      Add New Teacher
                                    {/* </Link> */}
                                  </Button>
                  </div>
                  <div className="flex-1 min-h-0">
                    <div className="overflow-x-auto">
                    <table className="w-full text-white">
                      <thead className="border-b border-gray-600">
                        <tr className="text-left">
                          <th className="pb-3 px-4">S.No.</th>
                          <th className="pb-3 px-4">Name</th>
                          <th className="pb-3 px-4">Branch</th>
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
                            <td className="py-3">
                              <label className="flex items-center space-x-2">
                                {/* <Checkbox checked={attendance[student.roll] || false} onCheckedChange={(checked) => handleAttendanceChange(student.roll, checked === true)} /> */}
                                <span className="text-sm text-gray-300">Information Tech.</span>
                              </label>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    </div>
                  </div>
                </div>
            </div>
            </div>
    </div>
    
  );
}