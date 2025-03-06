import { BackgroundBeams } from "@/components/ui/background-gradient-animation";
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden z-10 text-white">
      <div className="h-70 flex justify-center items-center p-4 text-center bg-black border border-white rounded-lg">
        <div className="flex flex-col items-center">
          <Image src="/Untitled (7).png" alt="logo" width={250} height={250} />
          
        </div>
        
        <div className="space-x-4">
        <h1 className="p-10">Select Your Role To Login!</h1>
          
          <Button asChild>
            <Link href="./student-login">
              Login as Student
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin-login">
              Login as Admin
            </Link>
          </Button>
          <Button asChild>
            <Link href="/teacher-login">
              Login as Teacher
            </Link>
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
