import { createBrowserRouter } from "react-router-dom"

import { AppLayout } from "@/pages/_layouts/app"
import { UseStatePage } from "@/pages/app/use-state"
import { UseEffectPage } from "@/pages/app/use-effect"
import { NotFound } from "@/pages/404"

import { UseEffectLayout } from "@/pages/_layouts/use-effect-layout"
import { ChatServer } from "@/pages/app/use-effect/chat-server"

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

      {
        path: "/use-effect",
        element: <UseEffectLayout />,
        children: [
          {
            path: "/use-effect",
            element: <UseEffectPage />
          },
          {
            path: "/use-effect/chat-server",
            element: <ChatServer />
          },
        ]
      }
    ]
  }
])
