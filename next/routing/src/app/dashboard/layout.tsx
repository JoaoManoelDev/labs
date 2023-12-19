import Link from "next/link"

import { dashboardRoutes } from "@/constants/routes"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mt-10">
      <nav className="space-x-6 flex">
        {dashboardRoutes.map(route => (
          <Link
            key={route.href}
            href={route.href}
          >
            <p
              className="border-b rounded-md w-24 text-center py-1">
              {route.label}
            </p>
          </Link> 
        ))}
      </nav>

      {children}
    </div>
  )
}