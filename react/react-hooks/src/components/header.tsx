import { NavLink } from "@/components/nav-link"
import { Separator } from "@/components/ui/separator"
import reactLogo from "@/assets/react.svg"

export const Header = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={reactLogo} alt="Logotipo do ReactJs" className="h-7 animate-spin-slow" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">useState</NavLink>
        </nav>
      </div>
    </header>
  )
}
