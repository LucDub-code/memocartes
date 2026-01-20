"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"


export default function NavToggle() {
  
  const pathname = usePathname()
  
  return (

    <nav className="relative bg-white flex items-center gap-1 rounded-full border border-ink shadow-medium text-preset-4-semibold">
      <div
        className={`
          absolute top-1 bottom-1 w-32 rounded-full
          bg-yellow border border-ink
          transition-transform duration-300 ease-out
          ${pathname === "/" ? "translate-x-1" : "translate-x-34"}
        `}
      />
      <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className="w-32 px-4 py-3 my-1 ml-1 text-center rounded-full relative z-1 ">Mode Étude</Link>
      <Link href="/cards" aria-current={pathname === "/cards" ? "page" : undefined} className="w-32 px-8 py-3 my-1 mr-1 text-center rounded-full relative z-1 ">Cartes</Link>
    </nav>
  )
}