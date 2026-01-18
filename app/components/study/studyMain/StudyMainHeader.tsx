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
            className="flex gap-1 px-4 py-3 bg-white border rounded-full cursor-pointer border-ink hover:bg-background"
          // onClick={() => setIsOpen(!isOpen)}
          >
            <span>Catégories</span>
            <img src="/icons/icon-chevron-down.svg" alt="" className="w-4" />
          </button>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="sr-only"
          />
          <div className={isChecked ? "checkbox-checked" : "checkbox"}>
            {isChecked && <img src="/icons/icon-check.svg" alt="" className="w-2.5" />}
          </div>
          <span>Cacher les cartes mémorisées</span>
        </label>
      </div>
      <button type="button" className="flex gap-2 px-4 py-3 bg-white border rounded-full cursor-pointer border-ink hover:bg-background">
        <img src="/icons/icon-shuffle.svg" alt="" className="w-4" />
        <span>Mélanger</span>
      </button>
    </div>
  )
}