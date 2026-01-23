"use client"

import useAuthStore from "@/app/stores/authStore"

export default function UserButton() {

  const { openAuth } = useAuthStore()

  return (
    <button
      type="button"
      aria-label="Se connecter"
      onClick={openAuth}
      className="flex items-center justify-center w-12 h-12 bg-white border rounded-full cursor-pointer border-ink shadow-medium hover:bg-background">
      <img src="/icons/icon-question.svg" alt="" className="w-6" />
    </button>
  )
}