// import { BackgroundBeams } from "@/components/ui/background-beams-with-collision";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import LoginForm from "@/components/ui/LoginForm";
import { Redirect } from "@/components/ui/Redirect";
import ImageGallery from "@/components/ui/image-gallery";
export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
    <div className="w-screen h-screen inset-0 bg-gradient-to-t from-[#159957]  to-[#1869bb]  flex justify-center items-center align-middle">
    <div className="w-3/4 flex  p-5 h-4/5 align-middle items-center rounded-3xl z-10  bg-[#37464771] overflow-hidden">
        <div className="w-1/2 hidden md:flex overflow-hidden rounded-3xl items-center justify-center h-full">
          <ImageGallery/>
        </div>
        <div className="w-full md:w-1/2">
          <Redirect/>
        <div className=" flex items-center align-middle justify-center overflow-hidden z-10">
          <LoginForm/>
        </div>
        </div>
        </div>
    </div>
    </BackgroundBeamsWithCollision>
    
  );
}


