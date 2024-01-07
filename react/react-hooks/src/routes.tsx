import { createBrowserRouter } from "react-router-dom"

import { AppLayout } from "@/pages/_layouts/app"
import { UseStatePage } from "@/pages/app/use-state"
import { NotFound } from "@/pages/404"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <UseStatePage />
      },
    ]
  }
])
