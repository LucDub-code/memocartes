"use client"

import { useState } from "react"
import { useCardFilterStore } from "@/app/stores/cardFilterStore"
import useCardStore from "@/app/stores/cardStore"
import Card from "./Card"

const CARDS_PER_LOAD = 12

export default function CardGrid() {

  const { selectedCategories } = useCardFilterStore()
  const { getFilteredCards } = useCardStore()

  const filteredCards = getFilteredCards(selectedCategories)

  const [visibleCount, setVisibleCount] = useState(CARDS_PER_LOAD)

  const hasMore = visibleCount < filteredCards.length
  const cardsToShow = filteredCards.slice(0, visibleCount)

  return (
    <>
      <div className="grid gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {cardsToShow.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            question={card.question}
            answer={card.answer}
            category={card.category}
            mastery_level={card.mastery_level}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-3 mb-16">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((count) =>
                Math.min(count + CARDS_PER_LOAD, filteredCards.length)
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
