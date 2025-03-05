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
      <Card className="h-80 flex flex-col justify-center align-center p-3 text-center ">
        <Image src="/Untitled (7).png" alt="logo" width={100} height={100} />
        <CardTitle className="align-center text-3xl font-bold mb-8">Login Portal</CardTitle>
        <CardDescription>Kindly Select Your Role To Login!</CardDescription>
      <div className="flex space-x-6 mt-10">
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
      
      <BackgroundBeams/>
      </Card>
    </div>
    
  );
}
