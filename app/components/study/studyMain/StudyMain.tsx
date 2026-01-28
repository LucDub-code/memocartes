"use client"

import { useEffect } from "react"
import StudyMainHeader from "./StudyMainHeader"
import StudyMainFooter from "./StudyMainFooter"
import StudyEmptyState from "./StudyEmptyState"
import StudyCardArea from "./StudyCardArea"
import Loader from "@/app/components/Loader"
import { useSession } from "@/lib/auth-client"
import useCardStore from "@/app/stores/cardStore"

export default function StudyMain() {
  
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
    <section className="flex flex-col w-full bg-white lg:max-w-204 lg:min-w-160 strokes-md           
  rounded-2xl">
      <StudyMainHeader />
      {isConnected && hasCards ? (
        <>
          <StudyCardArea />
          <StudyMainFooter />
        </>
      ) : (
        <StudyEmptyState />
      )}
    </section>
  )
}