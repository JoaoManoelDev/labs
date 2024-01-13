import { Outlet } from "react-router-dom"

import { Navigation } from "@/pages/app/use-effect/components/navigation"

export const UseEffectLayout = () => {
  return (
    <div className="flex min-h-screen flex-col antialiased">
    <Navigation />

    <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
      <Outlet />
    </div>
  </div>
  )
}
