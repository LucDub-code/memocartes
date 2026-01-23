"use client"

import useCardModalStore from "@/app/stores/cardModalStore"
import CardOverlay from "./CardOverlay"
import Loader from "../Loader"
import CardEditModal from "./CardEditModal"
import CardDeleteModal from "./CardDeleteModal"

export default function CardModalWrapper() {
  const { phase } = useCardModalStore()

  if (phase === "closed") return null

  return (
    <CardOverlay>
      {phase === "edit" && <CardEditModal />}
      {phase === "delete" && <CardDeleteModal />}
      {phase === "loading" && <Loader />}
    </CardOverlay>
  )
}