"use client"

import { useState, useRef } from "react"
import { useClickOutside } from "@/app/hooks/useClickOutside"
import useAuthStore from "@/app/stores/authStore"

export default function UserButton() {

  const { openAuth, isAuthenticated, setAuthenticated } = useAuthStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)
  useClickOutside(menuRef, () => setIsMenuOpen(false), isMenuOpen)

  const handleClick = () => {
    if (isAuthenticated) {
      setIsMenuOpen(!isMenuOpen)
    } else {
      openAuth()
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    setIsMenuOpen(false)
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        aria-label={isAuthenticated ? "Mon compte" : "Se connecter"}
        onClick={handleClick}
        className={`flex items-center justify-center w-13 h-13 border rounded-full cursor-pointer      
        border-ink shadow-medium ${isAuthenticated ? "bg-yellow hover:bg-light-blue" : "bg-white hover:bg-background"}`}
      >
        <img src={isAuthenticated ? "/icons/icon-user.svg" : "/icons/icon-question.svg"} alt="" className="w-6" />
      </button>
      {isMenuOpen && (
        <div className="absolute top-15 right-3 border rounded-lg border-ink shadow-menu text-crimson">
          <button
            className="flex items-center w-full gap-1 py-2 pl-4 pr-8 bg-white rounded-lg cursor-pointer text-preset-5 hover:bg-background border-ink"
            onClick={handleLogout}
          >
            <img src="/icons/icon-exit.svg" alt="" className="w-4" />
            Déconnexion
          </button>
        </div>
      )}
    </div>
  )
}