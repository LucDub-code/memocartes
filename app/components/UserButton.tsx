"use client"

import useAuthModalStore from "@/app/stores/authModalStore"

export default function UserButton() {

  const { openAuthModal } = useAuthModalStore()

  return (
    <button
      type="button"
      aria-label="Se connecter"
      onClick={openAuthModal}
      className="flex items-center justify-center bg-white border rounded-full border-ink shadow-soft w-13 h-13 cursor-pointer hover:bg-background">
      <img src="/icons/icon-question.svg" alt="" className="w-6" />
    </button>
  )
}