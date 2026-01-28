"use client";

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "@/lib/auth-client"


export default function NavToggle() {

  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const isAuthenticated = !!session

  const handleCardsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault()
      router.replace("/?auth=1&next=/cards")
    }
  }

  return (

    <nav className="relative flex items-center gap-1 bg-white border rounded-full border-ink shadow-medium text-preset-4-semibold">
      <div
        className={`
          absolute top-1 bottom-1 w-15 sm:w-32 rounded-full
          bg-yellow border border-ink
          transition-transform duration-300 ease-out
          ${pathname === "/" ? "translate-x-1" : "sm:translate-x-34 translate-x-17"}
        `}
      />
      <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className="relative px-4 my-1 ml-1 text-center rounded-full sm:w-32 sm:py-3 z-1 ">
        <span className="hidden sm:inline">Mode Étude</span>
        <img src="/icons/icon-mastered.svg" alt="" className="mx-auto w-7 sm:hidden" />
      </Link>
      <Link href="/cards" aria-current={pathname === "/cards" ? "page" : undefined} className="relative px-4 my-1 mr-1 text-center rounded-full sm:w-32 sm:px-8 sm:py-3 z-1 " onClick={handleCardsClick}>
        <span className="hidden sm:inline">Cartes</span>
        <img src="/icons/icon-cards.svg" alt="" className="mx-auto w-7 sm:hidden" />
      </Link>
    </nav>
  )
}