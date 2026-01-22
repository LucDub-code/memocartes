"use client"

import useAuthModalStore from "@/app/stores/authModalStore"

export default function UserButton() {

  const { openAuthModal } = useAuthModalStore()

  return (
    <button
      type="button"
      aria-label="Se connecter"
      onClick={openAuthModal}
      className="flex items-center justify-center w-12 h-12 bg-white border rounded-full cursor-pointer border-ink shadow-medium hover:bg-background">
      <img src="/icons/icon-question.svg" alt="" className="w-6" />
    </button>
  )
}