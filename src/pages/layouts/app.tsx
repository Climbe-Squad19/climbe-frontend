import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Outlet } from "react-router-dom"

export function AppLayout() {
  return (
    <div
      className="w-full min-h-screen grid grid-cols-[224px_1fr]"
    >
      <Sidebar />
      <main className="w-full ">
        <Header />

        <Outlet />
      </main>
    </div>
  )
}