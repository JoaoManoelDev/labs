import Image from "next/image"
import Link from "next/link"

import { Navbar } from "@/components/navbar"

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full py-6">
      <Link href="/">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={90}
          height={50}
          priority
        />
      </Link>

      <Navbar />
    </header>
  )
}
