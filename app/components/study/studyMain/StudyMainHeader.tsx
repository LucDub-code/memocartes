"use client"

import { useState } from "react"

export default function StudyMainHeader() {

  const [isChecked, setIsChecked] = useState(false)
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center justify-between w-full p-5 border-b h-21 border-ink text-preset-4-medium">
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            className="flex gap-1 px-4 py-3 border rounded-full cursor-pointer border-ink hover:bg-background"
            // onClick={() => setIsOpen(!isOpen)}
          >
            <span>Catégories</span>
            <img src="/icons/icon-chevron-down.svg" alt="chevron icon" className="w-4" />
          </button>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsChecked(!isChecked)}
        >
          <div className={isChecked ? "checkbox-checked" : "checkbox"}>
            {isChecked && <img src="/icons/icon-check.svg" alt="" className="w-2.5" />}
          </div>
          <span>Cacher les cartes mémorisées</span>
        </div>
      </div>
      <button type="button" className="flex gap-2 px-4 py-3 border rounded-full cursor-pointer border-ink hover:bg-background">
        <img src="/icons/icon-shuffle.svg" alt="shuffle icon" className="w-4" />
        <span>Mélanger</span>
      </button>
    </div>
  )
}