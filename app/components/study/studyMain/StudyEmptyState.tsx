"use client"

import Link from "next/link"
import useAuthStore from "@/app/stores/authStore"
import useSeedOfferStore from "@/app/stores/seedOfferStore"
import { useSession } from "@/lib/auth-client"

export default function StudyEmptyState() {

  const { openAuth } = useAuthStore()
  const { open } = useSeedOfferStore()

  const { data: session } = useSession()
  const isConnected = !!session

  const buttonStyles = "flex items-center gap-1 px-5 py-3 border rounded-full cursor-pointer border-ink shadow-large text-preset-4-medium"

  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-150 sm:min-h-140 lg:min-h-0  gap-8 pb-12">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-preset-2">Aucune carte à étudier</h2>
        <p className="text-center text-preset-4-regular text-ink-muted w-72">
          {isConnected
            ? "Vous n'avez pas encore de cartes. Commencez par en ajouter une."
            : "Connectez-vous pour créer des cartes et commencer à étudier."
          }
        </p>
      </div>
      {isConnected ? (
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/cards" className={`bg-white hover:bg-background ${buttonStyles}`}>
            Aller aux cartes
          </Link>
          <button onClick={open} className={`bg-pink hover:brightness-90 ${buttonStyles}`}>
            Charger 20 cartes d’exemple
          </button>
        </div>
      ) : (
        <button onClick={openAuth} className={buttonStyles}>
          Connectez-vous
        </button>
      )}
    </div>
  )
}