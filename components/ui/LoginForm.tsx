"use client"
import type React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { signIn, useSession } from "next-auth/react"
import router, { Router, useRouter } from "next/router"
import { useEffect } from "react"
import Link from "next/link"
export default function SignupFormDemo() {
  const session=useSession();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="w-full rounded-none md:rounded-2xl flex flex-col items-center md:p-8 shadow-input z-10 ">
      <h2 className="font-figtree z-10 text-lg md:text-3xl text-white text-center">Login to PDEA's Portal</h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-5 h-[1px] w-full" />
      <p className="text-center mb-10 text-white font-figtree text-md max-w-sm mt-2">
Enter Your Credentials to view your Profile and Latest Notifications</p>

      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>


        <button
          className="bg-[#2e2d31] relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          onClick={() => signIn()}
        >
          Sign In With Google &rarr;
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-5 h-[1px] w-full" />
        <div className="text-center text-lg text-blue-500 font-figtree"><Link href="/teacher" >Click Here For Admin/Teacher Login!</Link></div>
      </form>
    </div>
  )
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

