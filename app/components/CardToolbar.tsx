"use client"

import useCardStore from "@/app/stores/cardStore"
import { useStudyFilterStore } from "@/app/stores/studyFilterStore"
import { useCardFilterStore } from "@/app/stores/cardFilterStore"

import CategoryFilter from "./CategoryFilter"

type Props = {
  className?: string
  store: "study" | "cards"
}

export default function CardToolbar({ className, store }: Props) {

  const { shuffleCards } = useCardStore()

  const studyStore = useStudyFilterStore()
  const cardStore = useCardFilterStore()
  const { hideMemorized, toggleHideMemorized } = store === "study" ? studyStore : cardStore

  return (
    <div className={`flex items-center justify-between w-full text-preset-4-medium ${className ?? ""}`}>
      <div className="flex flex-wrap items-center gap-4">
        <CategoryFilter store={store} />
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={hideMemorized}
            onChange={toggleHideMemorized}
            className="sr-only peer"
          />
          <div className={`${hideMemorized ? "checkbox-checked" : "checkbox"} peer-focus-visible:outline-2 peer-focus-visible:outline-blue peer-focus-visible:outline-offset-4`}>
            {hideMemorized && <img src="/icons/icon-check.svg" alt="" className="w-2.5" />}
          </div>
          <span className="pr-3">Masquer mémorisées</span>
        </label>
      </div>
      <button type="button" className="flex self-start gap-2 px-4 py-3 bg-white border rounded-full cursor-pointer border-ink hover:bg-background" onClick={shuffleCards}>
        <img src="/icons/icon-shuffle.svg" alt="" className="w-4" />
        <span className="hidden sm:inline">Mélanger</span>
      </button>
    </div>
  )
}