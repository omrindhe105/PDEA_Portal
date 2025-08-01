/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState ,useEffect, use} from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/dashboard/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Header } from '@/components/ui/adminheader';
import { Button } from '@/app/dashboard/ui/button';
import { Input } from '@/app/dashboard/ui/input';
import { Label } from '@/app/dashboard/ui/label';
import { Textarea } from '@/app/dashboard/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Camera, Pencil, Save, Upload, UserCircle, Mail, BookOpen, GraduationCap, Clock, Phone, MapPin } from 'lucide-react';

import { teacherProfile } from '@/app/lib/teacherProfile';          

import { add } from 'date-fns'; 
import { profile } from 'console';

export default function TeacherProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [showImageUpload, setShowImageUpload] = useState(false);
    const [teacherData, setTeacherData] = useState({
        name: 'John Smith',
        email: 'john.smith@education.com',
        phone: '+91 1234567890',
        subjects: ['Mathematics', 'Physics'],
        experience: '8 years',
        education: [
            { degree: 'M.Ed. in Education', university: 'University of Delhi', year: '2015' },
            { degree: 'B.Ed.', university: 'Mumbai University', year: '2013' }
        ],
        address: 'Mumbai, Maharashtra',
        bio: 'Passionate educator with expertise in advanced mathematics and project-based learning.',
        achievements: [
            'Best Teacher Award 2024',
            'Published research paper on innovative teaching methods',
            'Conducted 5 workshops on STEM education'
        ],
        preferences: {
            theme: 'dark',
            notifications: true,
            language: 'English'
        }
    });
     
    const [profileData, setProfileData] = useState({
      
            firstname: '',
            lastname: ''
        ,
        email: '',
        phone: '',
        address: '',
        bio: '',
        experience: '',
        education: [{ degree: '', university: '', year: '' }],
        achievements: [''],
        preferences: {
            theme: 'dark',
            notifications: true, 
        }           
        })
    
    useEffect(() => {
  const fetchProfile = async () => {
    try {
      const data = await teacherProfile();
      console.log("Profile data fetched 3:", data);
   
       setProfileData(data.teacher);
      
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };

  fetchProfile(); 
}, []);

   

    
  
    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically save to backend
        console.log('Saving profile:', teacherData);
    }

    return (
        <div className="min-h-screen text-white">
            <Header />
            <div className='container mx-auto p-6'>
                

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/*Basic Info */}
                    <Card className="bg-gray-900/50 border-gray-800 lg:col-span-1">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative group">
                                    <Avatar className="w-32 h-32 border-4 border-blue-600/20">
                                        <AvatarImage src="/placeholder-avatar.jpg" alt="profile-image" />
                                        <AvatarFallback>
                                            <UserCircle className="w-20 h-20" />
                                        </AvatarFallback>
                                    </Avatar>
                                    {isEditing && (
                                        <button
                                            onClick={() => setShowImageUpload(true)}
                                            className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                                        >
                                            <Camera className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                                
                                <div className="mt-4 space-y-2">
                                    {isEditing ? (
                                        <Input
                                            value={profileData.firstname}
                                            onChange={(e) => setTeacherData({...teacherData, name: e.target.value})}
                                            className="bg-gray-800 border-gray-700 text-center"
                                        />
                                    ) : (
                                        <h2 className="text-2xl font-bold">{}</h2>
                                    )}
                                    <div className="flex items-center justify-center gap-2 text-gray-400">
                                        <MapPin className="w-4 h-4" />
                                        {isEditing ? (
                                            <Input
                                                value={teacherData.address}
                                                onChange={(e) => setTeacherData({...teacherData, address: e.target.value})}
                                                className="bg-gray-800 border-gray-700"
                                            />
                                        ) : (
                                            <span>{teacherData.address}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full mt-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                        {isEditing ? (
                                            <Input
                                                value={profileData.email}
                                                onChange={(e) => setTeacherData({...teacherData, email: e.target.value})}
                                                className="bg-gray-800 border-gray-700"
                                            />
                                        ) : (
                                            <span>{profileData.email}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-gray-400" />
                                        {isEditing ? (
                                            <Input
                                                value={teacherData.phone}
                                                onChange={(e) => setTeacherData({...teacherData, phone: e.target.value})}
                                                className="bg-gray-800 border-gray-700"
                                            />
                                        ) : (
                                            <span>{teacherData.phone}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Detailed Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Bio Section */}
                        <Card className="bg-gray-900/50 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <BookOpen className="w-5 h-5" />
                                    About Me
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isEditing ? (
                                    <Textarea
                                        value={teacherData.bio}
                                        onChange={(e) => setTeacherData({...teacherData, bio: e.target.value})}
                                        className="bg-gray-800 border-gray-700 min-h-[100px]"
                                    />
                                ) : (
                                    <p className="text-gray-300">{teacherData.bio}</p>
                                )}
                            </CardContent>
                        </Card>

                        {/* Education Section */}
                        <Card className="bg-gray-900/50 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5" />
                                    Education
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {teacherData.education.map((edu, index) => (
                                        <div key={index} className="border-b border-gray-800 last:border-0 pb-4 last:pb-0">
                                            {isEditing ? (
                                                <div className="space-y-2">
                                                    <Input
                                                        value={edu.degree}
                                                        onChange={(e) => {
                                                            const newEducation = [...teacherData.education];
                                                            newEducation[index].degree = e.target.value;
                                                            setTeacherData({...teacherData, education: newEducation});
                                                        }}
                                                        className="bg-gray-800 border-gray-700"
                                                    />
                                                    <Input
                                                        value={edu.university}
                                                        onChange={(e) => {
                                                            const newEducation = [...teacherData.education];
                                                            newEducation[index].university = e.target.value;
                                                            setTeacherData({...teacherData, education: newEducation});
                                                        }}
                                                        className="bg-gray-800 border-gray-700"
                                                    />
                                                </div>
                                            ) : (
                                                <>
                                                    <h3 className="font-semibold">{edu.degree}</h3>
                                                    <p className="text-gray-400">{edu.university} • {edu.year}</p>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Experience & Achievements */}
                        <Card className="bg-gray-900/50 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    Experience & Achievements
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {isEditing ? (
                                        <div className="space-y-2">
                                            <Label>Years of Experience</Label>
                                            <Input
                                                value={teacherData.experience}
                                                onChange={(e) => setTeacherData({...teacherData, experience: e.target.value})}
                                                className="bg-gray-800 border-gray-700"
                                            />
                                            <Label className="mt-4">Achievements</Label>
                                            {teacherData.achievements.map((achievement, index) => (
                                                <Input
                                                    key={index}
                                                    value={achievement}
                                                    onChange={(e) => {
                                                        const newAchievements = [...teacherData.achievements];
                                                        newAchievements[index] = e.target.value;
                                                        setTeacherData({...teacherData, achievements: newAchievements});
                                                    }}
                                                    className="bg-gray-800 border-gray-700 mb-2"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mb-4">
                                                <h3 className="font-semibold mb-2">Teaching Experience</h3>
                                                <p className="text-gray-300">{teacherData.experience}</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">Achievements</h3>
                                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                    {teacherData.achievements.map((achievement, index) => (
                                                        <li key={index}>{achievement}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* pfp */}
            <Dialog open={showImageUpload} onOpenChange={setShowImageUpload}>
                <DialogContent className="bg-gray-900 border-gray-800 text-white">
                    <DialogHeader>
                        <DialogTitle>Update Profile Picture</DialogTitle>
                        <DialogDescription className="text-gray-400">
                            Choose a new profile picture to upload
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                            <Upload className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                            <p className="text-sm text-gray-400">
                                Drag and drop your image here, or click to select
                            </p>
                        </div>
                        <div className="flex justify-end gap-4">
                            <Button
                                variant="outline"
                                onClick={() => setShowImageUpload(false)}
                                className="bg-gray-800 hover:bg-gray-700"
                            >
                                Cancel
                            </Button>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                Upload
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}