import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/layouts/app";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: []
  }
])