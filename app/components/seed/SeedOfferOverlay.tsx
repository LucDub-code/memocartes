"use client"

import useSeedOfferStore from "@/app/stores/seedOfferStore"

export default function SeedOfferOverlay({ children }: { children: React.ReactNode }) {
  
  const { dismiss } = useSeedOfferStore()

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