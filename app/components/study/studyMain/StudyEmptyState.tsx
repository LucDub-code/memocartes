"use client"

import Link from "next/link"
import useAuthStore from "@/app/stores/authStore"

export default function StudyEmptyState() {

  const { openAuth } = useAuthStore()

  const isConnected = false

  const buttonStyles = "flex items-center gap-1 px-5 py-3 bg-white border rounded-full cursor-pointer border-ink shadow-large text-preset-4-medium hover:bg-background"

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 pb-12">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-preset-2">Aucune carte à étudier</h2>
        <p className="text-center text-preset-4-regular text-ink-muted w-72">
          {isConnected
            ? "Vous n'avez pas encore créé de cartes. Commencez par en ajouter une."
            : "Connectez-vous pour créer des cartes et commencer à étudier."
          }
        </p>
      </div>
      {isConnected ? (
        <Link href="/cards" className={buttonStyles}>
          Aller aux cartes
        </Link>
      ) : (
        <button onClick={openAuth} className={buttonStyles}>
          Connectez-vous
        </button>
      )}
    </div>
  )
}