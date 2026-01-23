"use client"

import useCardModalStore from "@/app/stores/cardModalStore"

interface CardOverlayProps {
  children: React.ReactNode
}

export default function CardOverlay({ children }: CardOverlayProps) {

  const { closeModal } = useCardModalStore()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={closeModal}
    >
      {children}
    </div>
  )
}