"use client"

import { useCardFilterStore } from "@/app/stores/cardFilterStore"

import Card from "./Card"

export default function CardGrid() {

  const { selectedCategories } = useCardFilterStore()

  console.log(selectedCategories)

  return (
    <div className="grid grid-cols-3 gap-6">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}