import { Bolt, Building, CalendarCheck, FileInput, LayoutDashboard, UsersRound } from "lucide-react"
import { useLocation } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function Header() {

  const pages = [
    {
      path: '/',
      page: 'Dashboard /',
      description: 'Visão geral',
      icon: LayoutDashboard
    },
    {
      path: '/schedule',
      page: 'Agenda /',
      description: 'Visão Geral',
      icon: CalendarCheck
    },
    {
      path: '/proposals',
      page: 'Propostas comerciais /',
      description: 'Visão Geral',
      icon: FileInput
    },
    {
      path: '/companies',
      page: 'Empresas /',
      description: 'Visão Geral',
      icon: Building
    },
    {
      path: '/team',
      page: 'Equipe /',
      description: 'Visão Geral',
      icon: UsersRound
    },
    {
      path: '/settings',
      page: 'Configurações',
      icon: Bolt
    }
  ]

  const { pathname } = useLocation()

  const currentPage = pages.find(page => page.path === pathname) || pages[0]

  return (
    <header className="w-full px-6 py-5.5 flex items-center justify-between border-b border-zinc-700">
      <div className="flex items-center gap-3">
        {currentPage.icon && <currentPage.icon className="size-5 stroke-1 text-zinc-500" />}

        <div className="space-x-1">
          <span className="text-base font-semibold text-zinc-50">{currentPage.page}</span>
          <span className="text-base font-semibold text-zinc-500">{currentPage.description}</span>
        </div>
      </div>

      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}