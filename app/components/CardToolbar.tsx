"use client"

import { useState } from "react"

import CategoryFilter from "./CategoryFilter"

type Props = {
  className?: string
  store: "study" | "cards"
}

export default function CardToolbar({ className, store }: Props) {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={`flex items-center justify-between w-full text-preset-4-medium ${className ?? ""}`}>
      <div className="flex items-center gap-4">
        <CategoryFilter store={store} />
        <label className="flex items-center cursor-pointer gap-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="sr-only peer"
          />
          <div className={`${isChecked ? "checkbox-checked" : "checkbox"} peer-focus-visible:outline-2 peer-focus-visible:outline-blue peer-focus-visible:outline-offset-4`}>
            {isChecked && <img src="/icons/icon-check.svg" alt="" className="w-2.5" />}
          </div>
          <span>Cacher les cartes mémorisées</span>
        </label>
      </div>
      <button type="button" className="flex px-4 py-3 bg-white border rounded-full cursor-pointer gap-2 border-ink hover:bg-background">
        <img src="/icons/icon-shuffle.svg" alt="" className="w-4" />
        <span>Mélanger</span>
      </button>
    </div>
  )
}