"use client"

import Lottie from "lottie-react"
import loaderAnimation from "@/public/animations/loader.json"

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Lottie
        animationData={loaderAnimation}
        loop
        className="size-90"
      />
    </div>
  )
}