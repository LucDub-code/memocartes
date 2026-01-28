"use client"

import { useEffect } from "react"
import CardForm from "../components/cards/CardForm"
import CardToolbar from "../components/CardToolbar"
import CardGrid from "../components/cards/CardGrid"
import CardEmptyState from "../components/cards/CardEmptyState"
import CardModalWrapper from "../components/cards/CardModalWrapper"
import Loader from "../components/Loader"
import { useSession } from "@/lib/auth-client"
import useCardStore from "@/app/stores/cardStore"

export default function CardsPage() {
  
  const { data: session } = useSession()
  const isConnected = !!session
  const { cards, isLoading, fetchCards } = useCardStore()

  useEffect(() => {
    if (isConnected) {
      fetchCards()
    }
  }, [isConnected, fetchCards])

  if (isConnected && isLoading) {
    return <Loader />
  }

  const hasCards = cards.length > 0

  return (
    <main className="flex flex-col w-full gap-6 pt-6 lg:gap-8 lg:pt-8 pb-26">
      <h1 className="sr-only">Mes cartes</h1>
      <CardForm />
      {hasCards ? (
        <>
          <CardToolbar className="pt-4" store="cards" />
          <CardGrid />
        </>
      ) : (
        <CardEmptyState />
      )}
      <CardModalWrapper />
    </main>
  )
}