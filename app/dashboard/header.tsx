"use client";
import { Bell, Search, User ,LogOut, UserCircle} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
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
} from "./ui/dropdown-menu"
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
    <header className="border-b bg-background p-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Welcome,{session?.user?.name || "Guest"}!</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-10 w-64" />
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
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

