import logo from "@/assets/logo.svg"
import { Separator } from "@/components/ui/separator"
import { NavLink } from "@/components/nav-link"
import { Icons } from "@/components/icons"

export const Header = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logo} alt='Logotipo do App' className="h-7" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Icons.home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <Icons.utensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
