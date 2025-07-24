// import { BackgroundBeams } from "@/components/ui/background-beams-with-collision";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import LoginForm from "@/components/ui/LoginForm";
import { Redirect } from "@/components/ui/Redirect";
export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex items-center justify-around ">
    <div className="">
      <Redirect/>
    <div className="min-h-screen flex items-center justify-center overflow-hidden z-10">
    <LoginForm/>
    </div>
    
    
    
    </div>
    <div className="">
      image gallery

    </div>
    </div>
    </BackgroundBeamsWithCollision>
  );
}


