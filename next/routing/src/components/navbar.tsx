import Link from "next/link"

import { mainRoutes } from "@/constants/routes"

export const Navbar = () => {
  return (
    <nav className="space-x-6 flex">
      {mainRoutes.map(route => (
        <Link
          key={route.href}
          href={route.href}
        >
          <p className="border-b">{route.label}</p>
        </Link>
      ))}
    </nav>
  )
}