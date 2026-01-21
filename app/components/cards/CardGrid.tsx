"use client"

import { useState } from "react"
import { useCardFilterStore } from "@/app/stores/cardFilterStore"

import Card from "./Card"

// Données mock
const CARDS_PER_LOAD = 12
const TOTAL_CARDS = 40

export default function CardGrid() {

  const { selectedCategories } = useCardFilterStore()

  const [visibleCount, setVisibleCount] = useState(CARDS_PER_LOAD)

  const hasMore = visibleCount < TOTAL_CARDS
  const cardsToShow = Array.from({ length: visibleCount }, (_, index) => index)

  return (
    <>
      <div className="grid grid-cols-3 gap-6 mb-8">
        {cardsToShow.map((id) => (
          <Card key={id} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-3 mb-16">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((count) =>
                Math.min(count + CARDS_PER_LOAD, TOTAL_CARDS)
              )
            }
            className="w-fit flex items-center justify-center gap-2 px-4 py-3 text-center border rounded-full cursor-pointer border-ink text-preset-4-medium bg-white shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]"
          >
            Charger plus de cartes
          </button>
        </div>
      )}
    </>
  )
}
