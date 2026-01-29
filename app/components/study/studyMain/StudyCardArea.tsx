"use client"

import StudyCard from "./StudyCard"
// import { useStudyFilterStore } from "@/app/stores/studyFilterStore"
import useCardStore from "@/app/stores/cardStore"

export default function StudyCardArea() {

  // const { selectedCategories } = useStudyFilterStore()
  const { cards, currentIndex, refreshCards } = useCardStore()
  const currentCard = cards[currentIndex]

  const isMastered = currentCard.mastery_level >= 5

  if (!currentCard) return null

  const handleMastery = async () => {
    if (isMastered) return
    await fetch(`/api/cards/${currentCard.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mastery_level: currentCard.mastery_level + 1 })
    })
    refreshCards()
  }

  const handleReset = async () => {
    await fetch(`/api/cards/${currentCard.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mastery_level: 0 })
    })
    refreshCards()
  }

  return (
    <div className="w-full h-full px-4 py-6 sm:p-5">
      <StudyCard
        question={currentCard.question}
        answer={currentCard.answer}
        category={currentCard.category}
        mastery_level={currentCard.mastery_level}
      />
      <div className="flex sm:flex-row flex-col items-center justify-center gap-2.5 sm:gap-5">
        <button
          type="button"
          disabled={isMastered}
          onClick={handleMastery}
          className={`flex w-full sm:w-fit items-center justify-center gap-2 px-4 py-3 text-center bg-yellow border rounded-full cursor-pointer border-ink text-preset-4-medium shadow-large transition-all duration-100 ${isMastered ? "opacity-50 cursor-not-allowed shadow-none" : "hover:shadow-[4px_4px_0_var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]"}`}
        >
          <img src="/icons/icon-circle-check.svg" alt="" className="w-4" />
          Carte mémorisée
        </button>
        <button 
          type="button" 
          onClick={handleReset}
          className="flex w-full sm:w-fit items-center justify-center gap-2 px-4 py-3 text-center bg-white border rounded-full cursor-pointer border-ink text-preset-4-medium shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
          <img src="/icons/icon-reset.svg" alt="" className="w-4" />
          Réinitialiser carte
        </button>
      </div>
    </div>
  )
}