import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/layouts/app";
import { Dashboard } from "./pages/app/dashboard";
import { LoginPage } from "./pages/auth/login";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/schedule',
        element: <h1>Agenda</h1>
      },
      {
        path: '/proposals',
        element: <h1>Propostas comerciais</h1>
      },
      {
        path: '/companies',
        element: <h1>Empresas e Clientes</h1>
      },
      {
        path: '/team',
        element: <h1>Equipe</h1>
      },
      {
        path: '/settings',
        element: <h1>Configurações</h1>
      },
    ]
  },
  {
    path: '/',
    children: [
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  }
])