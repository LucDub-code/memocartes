"use client"

import { useEffect } from "react"
import useSeedOfferStore from "@/app/stores/seedOfferStore"

export default function SeedOfferOverlay({ children }: { children: React.ReactNode }) {

  const { dismiss } = useSeedOfferStore()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [dismiss])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={dismiss}
    >
      {children}
    </div>
  )
}