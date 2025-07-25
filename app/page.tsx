// import { BackgroundBeams } from "@/components/ui/background-beams-with-collision";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import LoginForm from "@/components/ui/LoginForm";
import { Redirect } from "@/components/ui/Redirect";
import ImageGallery from "@/components/ui/image-gallery";
export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
    <div className="w-screen h-screen flex justify-center items-center align-middle">
    <div className="w-3/4 flex p-5 h-4/5 align-middle items-center rounded-3xl justify  bg-[#2C2638] overflow-hidden">
        <div className="w-1/2 overflow-hidden rounded-3xl flex items-center justify-center h-full">
          <ImageGallery/>
        </div>
        <div className="w-1/2">
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


