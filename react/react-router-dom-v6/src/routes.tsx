import { createBrowserRouter } from "react-router-dom"

import { AppLayout } from "@/pages/_layouts/app"
import { Dashboard } from "@/pages/app/dashboard"
import { Orders } from "@/pages/app/orders"
import { NotFound } from "@/pages/404"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/orders",
        element: <Orders />
      }
    ]
  }
])
