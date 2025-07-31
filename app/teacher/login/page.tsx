"use client";
import {cn} from "@/lib/utils";
import Link from "next/link";
import Aurora from  "@/components/ui/aurorabg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { teacherLogin } from "@/app/lib/teacherLogin";

 
import ImageGallery from "@/components/ui/image-gallery";
import { useForm } from "react-hook-form";

  type FormData = {
  
  email: string;
  password: string;
};
export default function Home() {
  const {
    register,
    handleSubmit,
  } = useForm<FormData>();

   const onSubmit = async (data: FormData) => {
    try { 
      const result = await teacherLogin(data.email,data.password);
      const data2 = result.json();
      console.log("Login response data:", data2);

      if(result.ok){
        alert("Login Successful");
        window.location.href = "/teacher/dashboard"; // Redirect to dashboard on success
      } else {
        alert("Login Failed");
        console.error("Login failed with status:", result.status);
       
      } // ✅ pass entire object
    
    } catch (err) {
      console.error("Login failed:", err);
    }
  };
  
  

  return (
    <div className="w-screen relative h-screen flex justify-center items-center align-middle">
      <Aurora
        colorStops={["#76ff67", "#B19EEF", "#5227FF"]}
        blend={1}
        amplitude={1.5}
        speed={0.5}
      />
      <div className="font-figtree absolute w-3/4 z-20 backdrop-blur-md flex p-5 h-4/5 align-middle items-center rounded-3xl bg-[#6a69691e] overflow-hidden">
        <div className="w-1/2 hidden md:flex overflow-hidden rounded-3xl items-center justify-center h-full">
          <ImageGallery />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center align-middle justify-center overflow-hidden z-10">
            <form
              className="flex w-full p-7 items-center flex-col gap-3 py-5 rounded-2xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="text-white text-center text-2xl">
                Login as a Teacher at PDEA&apos;s Portal
              </p>
              <p>Don&apos;t have an account as a Teacher? <Link className="text-blue-500" href="/teacher/register">Register here.</Link></p>
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />

              <LabelInputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="projectmayhem@fc.com" type="email" {...register("email", { required: true })} />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" {...register("password", { required: true })} />
              </LabelInputContainer>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-1 h-[1px] w-full" />

              <input
                className="bg-[#443379] text-lg text-white rounded-lg cursor-pointer hover:bg-black transition w-full h-10"
                type="submit"
                value="Login"
              />
        <div className="text-center text-lg text-blue-500 font-figtree"><Link href="/" >Click Here For Student Login</Link></div>
            </form>
          </div>
        </div>
      </div>
    </div>

    // </BackgroundBeamsWithCollision>
  );
}
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
}

