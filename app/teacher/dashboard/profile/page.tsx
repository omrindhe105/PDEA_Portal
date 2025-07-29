'use client';
import React from 'react';
import { Card, CardContent } from '@/app/dashboard/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';




export default function TeacherProfile() {
    const teacherData = {
        name: 'John Smith',
        email: 'john.smith@education.com',
        subject: 'Mathematics',
        experience: '8 years',
        education: 'M.Ed. in Education',
        bio: 'Passionate educator with expertise in advanced mathematics and project-based learning.'
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Teacher Profile</h1>
            
            <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6">
                    <div className="flex items-center gap-6 mb-6">
                        <Avatar className="w-24 h-24">
                            <AvatarImage src="/placeholder-avatar.jpg" alt={teacherData.name} />
                            <AvatarFallback>{teacherData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-xl font-semibold">{teacherData.name}</h2>
                            <p className="text-gray-600">{teacherData.subject} Teacher</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Contact Information</h3>
                            <p className="text-gray-600">{teacherData.email}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Experience</h3>
                            <p className="text-gray-600">{teacherData.experience}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Education</h3>
                            <p className="text-gray-600">{teacherData.education}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Bio</h3>
                            <p className="text-gray-600">{teacherData.bio}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}