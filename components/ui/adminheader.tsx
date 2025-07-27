"use client";
import { Bell, Search, User, LogOut, UserCircle, Check, X, AlertTriangle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "./button"
import { ModeToggle } from "../../app/dashboard/mode-toggle"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [confirmationDialog, setConfirmationDialog] = useState<{
    isOpen: boolean;
    type: 'approve' | 'deny' | null;
    notificationId: number | null;
    studentName: string;
  }>({
    isOpen: false,
    type: null,
    notificationId: null,
    studentName: ''
  });

  const [notifications, setNotifications] = useState([
    { id: 1, text: "Dummy Sharma is trying to join the BE IT Classroom", studentName: "Shubham bhat", pending: true },
    { id: 2, text: "Dummy Kumar is trying to join the TE IT Classroom", studentName: "Shubham bhat", pending: true },
    { id: 3, text: "Dummy Khandge is trying to join the SE IT Classroom", studentName: "Shubham bhat", pending: true },
    { id: 4, text: "Dummy Prasad is trying to join the BE IT Classroom", studentName: "Shubham bhat", pending: true },
    { id: 5, text: "Dummy Kokne is trying to join the TE IT Classroom", studentName: "Shubham bhat", pending: true },
  ]);

  const handleApproveClick = (id: number, studentName: string) => {
    setConfirmationDialog({
      isOpen: true,
      type: 'approve',
      notificationId: id,
      studentName
    });
  };

  const handleDenyClick = (id: number, studentName: string) => {
    setConfirmationDialog({
      isOpen: true,
      type: 'deny',
      notificationId: id,
      studentName
    });
  };

  const handleConfirm = () => {
    if (confirmationDialog.notificationId) {
      setNotifications(notifications.filter(n => n.id !== confirmationDialog.notificationId));
      // Here you would typically make an API call to update the backend
      console.log(`Student ${confirmationDialog.studentName} ${confirmationDialog.type === 'approve' ? 'approved' : 'denied'}`);
    }
    setConfirmationDialog({ isOpen: false, type: null, notificationId: null, studentName: '' });
  };

  const handleCancel = () => {
    setConfirmationDialog({ isOpen: false, type: null, notificationId: null, studentName: '' });
  };

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
        <div className="relative">
          <Button 
            variant="outline" 
            className="relative" 
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="h-10 w-10" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </Button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-96 bg-background border rounded-lg shadow-lg z-50 overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">Notifications</h3>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-4 border-b hover:bg-accent flex items-center justify-between">
                    <p className="text-sm flex-1">{notification.text}</p>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleApproveClick(notification.id, notification.studentName)}
                        className="h-8 w-8 text-green-500 hover:text-green-700 hover:bg-green-100"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDenyClick(notification.id, notification.studentName)}
                        className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-100"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {notifications.length === 0 && (
                  <div className="p-4 text-center text-muted-foreground">
                    No new notifications
                  </div>
                )}
              </div>
            </div>
          )}

          <Dialog open={confirmationDialog.isOpen} onOpenChange={() => handleCancel()}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {confirmationDialog.type === 'approve' ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  )}
                  {confirmationDialog.type === 'approve' ? 'Approve Student' : 'Deny Student'}
                </DialogTitle>
                <DialogDescription>
                  Are you sure you want to {confirmationDialog.type === 'approve' ? 'approve' : 'deny'} the admission request for{' '}
                  <span className="font-medium">{confirmationDialog.studentName}</span>?
                  {confirmationDialog.type === 'deny' && (
                    <p className="mt-2 text-red-500">This action cannot be undone.</p>
                  )}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button
                  variant={confirmationDialog.type === 'approve' ? 'default' : 'destructive'}
                  onClick={handleConfirm}
                >
                  {confirmationDialog.type === 'approve' ? 'Approve' : 'Deny'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
        </div>
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

