"use client"

import { useState, useRef } from "react"
import { useStudyFilterStore } from "@/app/stores/studyFilterStore"
import { useCardFilterStore } from "@/app/stores/cardFilterStore"
import { useClickOutside } from "@/app/hooks/useClickOutside"
import { DEFAULT_CATEGORIES } from "@/lib/categories"
import useCardStore from "@/app/stores/cardStore"


type Props = {
  store: "study" | "cards"
}

export default function CategoryFilter({ store }: Props) {

  const [isOpen, setIsOpen] = useState(false)

  const studyStore = useStudyFilterStore()
  const cardStore = useCardFilterStore()
  const { selectedCategories, toggleCategory } = store === "study" ? studyStore : cardStore

  const { cards } = useCardStore()

  const categoriesWithCount = DEFAULT_CATEGORIES
    .map(name => ({
      name,
      count: cards.filter(card => card.category === name).length
    }))
    .filter(category => category.count > 0)

  const filterRef = useRef<HTMLDivElement>(null)
  useClickOutside(filterRef, () => setIsOpen(false), isOpen)

  return (
    <div ref={filterRef} className="relative">
      <button
        className={`flex gap-1 px-4 py-3 bg-white border rounded-full cursor-pointer border-ink ${!isOpen ? "hover:bg-background" : ""}`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Catégories</span>
        <img src="/icons/icon-chevron-down.svg" alt="" className="w-4" />
      </button>
      {isOpen && (
        <div role="group" aria-label="Filtrer par catégorie" className="absolute z-10 bg-white border rounded-lg top-13 w-65 border-ink shadow-menu">
          {categoriesWithCount.map((category) => (
            <label key={category.name} className="flex items-center gap-2 px-4 py-2 border-b cursor-pointer border-ink last:border-b-0 last:rounded-b-lg first:rounded-t-lg hover:bg-background">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => toggleCategory(category.name)}
                className="sr-only peer"
              />
              <div className={`${selectedCategories.includes(category.name) ? "checkbox-checked" : "checkbox"} peer-focus-visible:outline-2 peer-focus-visible:outline-blue peer-focus-visible:outline-offset-4`}>
                {selectedCategories.includes(category.name) && <img src="/icons/icon-check.svg" alt="" className="w-2.5" />}
              </div>
              <span className="text-preset-5">{category.name}</span>
              <span className="text-preset-5 text-ink-muted">(${category.count})</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}