import { LayoutDashboard } from "lucide-react"
import { useLocation } from "react-router-dom"

export function Header() {

  const pages = [
    {
      path: '/',
      page: 'Dashboard',
      description: 'Visão geral',
      icon: LayoutDashboard
    }
  ]

  const { pathname } = useLocation()

  const currentPage = pages.find(page => page.path === pathname) || pages[0]

  return (
    <header className="w-full px-6 py-4.5">
      <div className="flex items-center gap-3">
        {currentPage.icon && <currentPage.icon className="size-5 stroke-1 text-zinc-500" />}

        <div className="space-x-1">
          <span className="text-base font-semibold text-zinc-50">{currentPage.page} /</span>
          <span className="text-base font-semibold text-zinc-500">{currentPage.description}</span>
        </div>
      </div>

      <div></div>
    </header>
  )
}