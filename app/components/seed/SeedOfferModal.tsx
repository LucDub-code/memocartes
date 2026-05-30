"use client"

import { useState } from "react"
import useSeedOfferStore from "@/app/stores/seedOfferStore"
import useCardStore from "@/app/stores/cardStore"
import useToastStore from "@/app/stores/toastStore"

export default function SeedOfferModal() {

  const { close, dismiss, celebrate } = useSeedOfferStore()
  const { fetchCards } = useCardStore()
  const { showToast } = useToastStore()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleClick = async () => {
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/cards/seed", { method: "POST" })
      if (!res.ok) throw new Error()
      await fetchCards()
      celebrate()
      showToast("20 cartes ajoutées.")
      close()
    } catch {
      showToast("Échec du chargement des cartes.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="relative w-full px-6 py-8 bg-white sm:px-8 max-w-116 rounded-2xl strokes-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 id="modal-title" className="text-center text-preset-2">
        Démarrez avec 20 cartes
      </h2>
      <p className="mt-4 text-center text-preset-4-regular text-ink-muted">
        Votre compte est vide. Ajoutez 20 cartes d’exemple, réparties dans toutes
        les catégories, pour tester l’application tout de suite.
      </p>
      <div className="flex flex-col gap-3 mt-8">
        <button
          type="button"
          onClick={handleClick}
          disabled={isSubmitting}
          className="flex items-center justify-center px-5 py-3 border rounded-full cursor-pointer bg-yellow border-ink shadow-large text-preset-4-semibold hover:bg-light-blue disabled:opacity-60"
        >
          {isSubmitting ? "Chargement…" : "Ajouter les 20 cartes"}
        </button>
        <button
          type="button"
          onClick={dismiss}
          disabled={isSubmitting}
          className="flex items-center justify-center px-5 py-3 bg-white border rounded-full cursor-pointer border-ink shadow-large text-preset-4-medium hover:bg-background disabled:opacity-60"
        >
          Plus tard
        </button>
      </div>
    </div>
  )
}