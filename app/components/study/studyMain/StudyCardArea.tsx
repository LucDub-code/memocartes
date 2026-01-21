"use client"

import StudyCard from "./StudyCard"
import { useStudyFilterStore } from "@/app/stores/studyFilterStore"

export default function StudyCardArea() {

  const { selectedCategories } = useStudyFilterStore()
 
  // en attendant de faire vraiement le tri
  console.log(selectedCategories)

  return (
    <div className="w-full h-full p-5">
      <StudyCard />
      <div className="flex items-center justify-center gap-5">
        <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 text-center bg-yellow border rounded-full cursor-pointer border-ink text-preset-4-medium shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
          <img src="/icons/icon-circle-check.svg" alt="" className="w-4" />
          Carte mémorisée
        </button>
        <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 text-center bg-white border rounded-full cursor-pointer border-ink text-preset-4-medium shadow-large hover:shadow-[4px_4px_0_var(--ink)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]">
          <img src="/icons/icon-reset.svg" alt="" className="w-4" />
          Réinitialiser carte
        </button>
      </div>
    </div>
  )
}