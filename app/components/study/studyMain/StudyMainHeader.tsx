"use client"

import { useState } from "react"

export default function StudyMainHeader() {

  const [isChecked, setIsChecked] = useState(false)
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-between items-center w-full p-5 border-b h-21 border-ink text-preset-4-medium">
      <div className="flex gap-4 items-center">
        <div className="relative">
          <button
            className="flex gap-1 border border-ink rounded-full px-4 py-3 cursor-pointer"
            // onClick={() => setIsOpen(!isOpen)}
          >
            <span>Catégories</span>
            <img src="/icons/icon-chevron-down.svg" alt="chevron icon" className="w-4" />
          </button>
        </div>
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => setIsChecked(!isChecked)}
        >
          <div className={isChecked ? "checkbox-checked" : "checkbox"}>
            {isChecked && <img src="/icons/icon-check.svg" alt="" className="w-2.5" />}
          </div>
          <span>Cacher les cartes mémorisées</span>
        </div>
      </div>
      <button type="button" className="flex gap-2 border border-ink rounded-full px-4 py-3 cursor-pointer">
        <img src="/icons/icon-shuffle.svg" alt="shuffle icon" className="w-4" />
        <span>Mélanger</span>
      </button>
    </div>
  )
}