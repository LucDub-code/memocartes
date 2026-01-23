"use client"

import useAuthStore from "@/app/stores/authStore"
import Overlay from "../Overlay"
import AuthModal from "./AuthModal"
import Loader from "../Loader"

export default function AuthFlowWrapper() {

  const { phase } = useAuthStore()

  if (phase === "closed") return null

  return (
    <Overlay>
      {phase === "auth" && <AuthModal />}
      {phase === "loading" && <Loader />}
    </Overlay>
  )
}