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

  const isBusy = isConnected && isLoading

  return (
    <section className="flex flex-col w-full bg-white lg:max-w-204 lg:min-w-160 strokes-md rounded-2xl">
      <StudyMainHeader />
      {isBusy ? (
        <Loader />
      ) : isConnected && cards.length > 0 ? (
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