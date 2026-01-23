"use client"

import useAuthStore from "@/app/stores/authStore"

interface OverlayProps {
  children: React.ReactNode
}

export default function Overlay({ children }: OverlayProps) {

  const { closeAuth } = useAuthStore()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={closeAuth}
    >
      {children}
    </div>
  )
}