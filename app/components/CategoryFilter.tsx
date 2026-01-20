"use client"

import { useState } from "react"
import { useStudyFilterStore } from "@/app/stores/studyFilterStore"
import { useCardFilterStore } from "@/app/stores/cardFilterStore"

// Données mock - à remplacer par l'API plus tard                                                    
const mockCategories = [
  { id: "1", name: "Art", count: 1 },
  { id: "2", name: "CSS", count: 6 },
  { id: "3", name: "Geography", count: 4 },
  { id: "4", name: "History", count: 1 },
  { id: "5", name: "HTML", count: 3 },
  { id: "6", name: "JavaScript", count: 14 },
  { id: "7", name: "Literature", count: 1 },
  { id: "8", name: "Mathematics", count: 1 },
  { id: "9", name: "Programming Concepts", count: 1 },
  { id: "10", name: "Science", count: 3 },
  { id: "11", name: "Web Development", count: 5 },
]

type Props = {
  store: "study" | "cards"
}

export default function CategoryFilter({ store }: Props) {

  const [isOpen, setIsOpen] = useState(false)

  const studyStore = useStudyFilterStore()
  const cardStore = useCardFilterStore()
  const { selectedCategories, toggleCategory } = store === "study" ? studyStore : cardStore

  return (
    <div className="relative">
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
        <div role="group" aria-label="Filtrer par catégorie" className="absolute top-13 w-65 rounded-lg bg-white border border-ink z-10 shadow-menu">
          {mockCategories.map((category) => (
            <label key={category.id} className="px-4 py-2 flex items-center gap-2 cursor-pointer border-b border-ink last:border-b-0 last:rounded-b-lg first:rounded-t-lg hover:bg-background">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
                className="sr-only peer"
              />
              <div className={`${selectedCategories.includes(category.id) ? "checkbox-checked" : "checkbox"} peer-focus-visible:outline-2 peer-focus-visible:outline-blue peer-focus-visible:outline-offset-4`}>
                {selectedCategories.includes(category.id) && <img src="/icons/icon-check.svg" alt="" className="w-2.5" />}
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