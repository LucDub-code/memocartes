"use client"

import useAuthModalStore from "@/app/stores/authModalStore"

export default function AuthModal() {
  const { closeAuthModal } = useAuthModalStore()

  return (
    <div
      className="fixed inset-0 bg-ink/70 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      onClick={closeAuthModal}
    >
    </div>
  )
}