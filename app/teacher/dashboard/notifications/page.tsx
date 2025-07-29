'use client';

import { useState } from 'react';
import { Header } from "@/components/ui/adminheader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/dashboard/ui/card";

interface Notification {
    id: number;
    type: 'notice' | 'circular';
    title: string;
    date: string;
    content: string;
}

export default function NotificationsPage() {
    const [notifications] = useState<Notification[]>([
        {
            id: 1,
            type: 'notice',
            title: 'Annual Sports Day',
            date: '2024-02-15',
            content: 'Annual Sports Day will be held on February 20th. All teachers must attend.',
        },
        {
            id: 2,
            type: 'circular',
            title: 'Staff Meeting',
            date: '2024-02-10',
            content: 'Monthly staff meeting scheduled for next Monday at 2 PM.',
        },
        {
            id: 3,
            type: 'notice',
            title: 'Parent-Teacher Meeting',
            date: '2024-02-25',
            content: 'PTM for all classes will be conducted on February 25th.',
        },
    ]);

    return (
        
        <div className="">
        <Header />
        <div className='p-6'>

            <h1 className="text-2xl font-bold mb-8 text-gray-100">Notifications</h1>
            <div className=" md:grid-cols-2 lg:grid-cols-3 gap-2 mb-3">
                {notifications.map((notification) => (
                    <Card key={notification.id} className="bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg hover:shadow-xl mb-5 transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">{notification.title}</CardTitle>
                            <CardDescription className="text-sm text-gray-400">{notification.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">{notification.content}</p>
                            <span className={`px-3 py-1 text-sm rounded-full ${notification.type === 'notice' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                                {notification.type}
                            </span>
                        </CardContent>
                    </Card>
                ))}
            </div>
            </div>
        </div>
    );
}