'use client';

import { useState } from 'react';
import { Header } from "@/components/ui/adminheader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/dashboard/ui/card";
import Link  from "next/link";
import { Button
 } from '@/components/ui/button';
 import { Check, X } from 'lucide-react';
interface Notification {
    id: number;
    type: 'Notice' | 'Circular';
    title: string;
    date: string;
    time: string; 
    content: string;
}

export default function NotificationsPage() {
      const [confirmationDialog, setConfirmationDialog] = useState<{
    isOpen: boolean;
    type: 'approve' | 'deny' | null;
    notificationId: number | null;
    studentName: string;
  }>({
    isOpen: false,
    type: null,
    notificationId: null,
    studentName: ''
  });
      const handleApproveClick = (id: number, studentName: string) => {
    setConfirmationDialog({
      isOpen: true,
      type: 'approve',
      notificationId: id,
      studentName
    });
  };

  const handleDenyClick = (id: number, studentName: string) => {
    setConfirmationDialog({
      isOpen: true,
      type: 'deny',
      notificationId: id,
      studentName
    });
  };
    
    
      const [notifications, setNotifications] = useState([
    { id: 1, text: "is trying to join the BE IT Classroom", studentName: "Mukesh Vaneeyar", pending: true },
    { id: 2, text: "is trying to join the TE IT Classroom", studentName: "Bhamshu tahb", pending: true },
    { id: 3, text: "is trying to join the SE IT Classroom", studentName: "Khandge Kumar", pending: true },
    { id: 4, text: "is trying to join the BE IT Classroom", studentName: "Bhau Rindhe", pending: true },
    { id: 5, text: "is trying to join the TE IT Classroom", studentName: "Mattoo bhat", pending: true },
  ]);

    return (
        
        <div className="">
        <Header />
        <div className='p-5'>

            <h1 className="text-2xl font-bold mb-5 text-gray-100">Notifications</h1>
            <div className="sm:max-h-[400px] overflow-y-auto">
                            {notifications.map((notification) => (
                              <div key={notification.id} className="p-4 border-b hover:bg-[#1a1a1a] flex items-center justify-between">
                                <p className='mr-1 font-bold'>{notification.studentName}</p>
                                <p className="text-sm flex-1">{notification.text}</p>
                                <div className="flex items-center gap-2 ml-4">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleApproveClick(notification.id, notification.studentName)}
                                    className="h-8 w-8 text-green-500 hover:text-green-700 hover:bg-green-100"
                                  >
                                    <Check className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDenyClick(notification.id, notification.studentName)}
                                    className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-100"
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                            {notifications.length === 0 && (
                              <div className="p-4 text-center text-muted-foreground">
                                No new notifications
                              </div>
                            )}
                          </div>
            </div>
        </div>
    );
}