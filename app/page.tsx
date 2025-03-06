import { BackgroundBeams } from "@/components/ui/background-gradient-animation";
import LoginForm from "@/components/ui/LoginForm";
import { Redirect } from "@/components/ui/Redirect";
export default function Home() {
  return (
    <div>
      <Redirect/>
    <div className="min-h-screen flex items-center justify-center overflow-hidden z-10 bg-black">
    <LoginForm/>
    </div>
    <BackgroundBeams/>
    </div>
  );
}


