import { Home, Calendar, Megaphone, Bell, User, Menu, X, SquareMenu, PanelsTopLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "./button"
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
export function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-background/10 backdrop-blur-lg border border-white/10"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </button>

      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 h-full border-r bg-background/10 backdrop-blur-lg p-6 transition-transform duration-200 ease-in-out",
        isMobile && !isMobileMenuOpen ? "-translate-x-full" : "translate-x-0",
        "lg:translate-x-0 lg:static"
      )}>
        <div className="flex text-xl font-semibold items-center mb-8">
          <PanelsTopLeft className="mr-4" />Menu
        </div>
      <nav className="space-y-8">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-4">Main</h3>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/">
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/timetable">
                <Calendar className="mr-3 h-5 w-5" />
                Timetable
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/Notices">
                <Megaphone className="mr-3 h-5 w-5" />
                Notices
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-4">Account</h3>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/notifications">
                <Bell className="mr-3 h-5 w-5" />
                Notifications
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/profile">
                <User className="mr-3 h-5 w-5" />
                Profile
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </aside>
    </>
  )
}

