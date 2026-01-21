"use client"

import useCardModalStore from "@/app/stores/cardModalStore"

import CardEditModal from "./CardEditModal"
import CardDeleteModal from "./CardDeleteModal"

export default function CardModalWrapper() {
  const { modal } = useCardModalStore()

  if (modal === "edit") return <CardEditModal />
  if (modal === "delete") return <CardDeleteModal />
  return null
}