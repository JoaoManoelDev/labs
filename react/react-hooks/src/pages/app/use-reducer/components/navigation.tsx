import { NavLink } from "@/components/nav-link"

export const Navigation = () => {
  return (
    <div className="flex h-16 items-center gap-6 px-6">
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <NavLink to="/use-reducer">Inicio</NavLink>
      </nav>
    </div>
  )
}
