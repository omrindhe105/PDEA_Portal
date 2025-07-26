"use client";
import { Bell, Search, User ,LogOut, UserCircle} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "./button"
import { ModeToggle } from "../../app/dashboard/mode-toggle"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "../../app/dashboard/ui/dropdown-menu"
export function Header() {
  const { data: session } = useSession();
  const router = useRouter()
  const handleLogout = async () => {
    await signOut({ 
      redirect: true, 
      callbackUrl: "/" 
    })
  }
  return (
    <header className="border-b bg-background h-27 p-6 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Welcome,{session?.user?.name || "Prof.Dummy Patel"}!</h1>
      <div className="flex items-center space-x-14">
        {/* <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-10 w-64" />
        </div> */}
        <Button variant="outline" className="" onClick={() => router.push("/notifications")}>
          <Bell className="h-10 w-10" />
        </Button>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex h-15 max-w-fit w-25" variant="outline">
            <div className="flex items-center space-x-1">
            <User className="h-10 w-10" />
            <p className="">{session?.user?.name || "Dummy Patel"}</p>
            </div>
            <p className="text-muted-foreground">{session?.user?.email || "Information Technology "}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-72">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircle className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </header>
  )
}

