"use client"

import { useState, useEffect } from "react"
import Confetti from "react-confetti"
import useSeedOfferStore from "@/app/stores/seedOfferStore"

function useWindowSize() {

  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight })

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return size
}

export default function ConfettiRain() {

  const { isCelebrating, stopCelebrating } = useSeedOfferStore()
  const { width, height } = useWindowSize()

  if (!isCelebrating) return null

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={300}
      gravity={0.2}
      recycle={false}
      colors={["#F8CB46", "#92ADEB", "#5072C7", "#FC8AE5", "#F073A3", "#E11966", "#47D9C9"]}
      onConfettiComplete={stopCelebrating}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 100, pointerEvents: "none" }}
    />
  )
}