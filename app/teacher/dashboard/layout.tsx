// app/teacher/dashboard/layout.tsx
"use client";
import { Sidebar } from "@/components/ui/sidebaradmin"
import { Header } from "@/components/ui/adminheader"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* <Header /> */}
        <main className="p-2">{children}</main>
      </div>
    </div>
  );
}
