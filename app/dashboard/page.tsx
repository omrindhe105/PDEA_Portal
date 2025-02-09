import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { SubjectAttendance } from "./subject-attendence"
import { Notifications } from "./notifications"
import { Timetable } from "./timetable"
import { LatestResults } from "./latest-results"
import { AttendanceGraph } from "./attendence-graph"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AttendanceGraph />
            </div>
            <div>
              <SubjectAttendance />
            </div>
            <div className="lg:col-span-2">
              <Timetable />
            </div>
            <div>
              <Notifications />
            </div>
            <div className="lg:col-span-3">
              <LatestResults />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

