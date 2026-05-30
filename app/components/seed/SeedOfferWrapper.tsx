"use client"

import { useEffect } from "react"
import { useSession } from "@/lib/auth-client"
import useSeedOfferStore, { DISMISS_KEY } from "@/app/stores/seedOfferStore"
import useCardStore from "@/app/stores/cardStore"
import SeedOfferOverlay from "./SeedOfferOverlay"
import SeedOfferModal from "./SeedOfferModal"

export default function SeedOfferWrapper() {

  const { data: session } = useSession()
  const isConnected = !!session

  const { isOpen, open } = useSeedOfferStore()
  const { cards, isLoading } = useCardStore()

  useEffect(() => {
    if (!isConnected || isLoading) return
    if (cards.length > 0) return
    if (localStorage.getItem(DISMISS_KEY)) return
    open()
  }, [isConnected, isLoading, cards.length, open])

  if (!isOpen) return null

  return (
    <SeedOfferOverlay>
      <SeedOfferModal />
    </SeedOfferOverlay>
  )
}