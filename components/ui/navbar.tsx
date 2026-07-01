import { ArrowRightIcon, BuildingsIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { Button } from "./button"

type Navlinks = {
  label: string
  href: string
}

const navlinks: Navlinks[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Collections",
    href: "/collections",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

export default function Navbar() {
  return (
    <header className="flex h-(--header-height) w-full items-center justify-between bg-background px-6">
      <div className="flex items-center gap-2">
        <BuildingsIcon size={24} weight="bold" />
        <span className="text-xl font-semibold">Furnispace</span>
      </div>
      <nav className="hidden lg:block">
        <ol className="flex items-center gap-6">
          {navlinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="relative inline-block font-medium text-muted-foreground transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:text-primary hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <Button size={"sm"}>
        Lets Connect <ArrowRightIcon size={24} />
      </Button>
    </header>
  )
}
