"use client"

import useCardModalStore from "@/app/stores/cardModalStore"
import CardOverlay from "./CardOverlay"
import Loader from "../Loader"
import CardEditModal from "./CardEditModal"
import CardDeleteModal from "./CardDeleteModal"

export default function CardModalWrapper() {

  const { modal, isLoading } = useCardModalStore()

  if (modal === null) return null

  return (
    <CardOverlay>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {modal === "edit" && <CardEditModal />}
          {modal === "delete" && <CardDeleteModal />}
        </>
      )}
    </CardOverlay>
  )
}