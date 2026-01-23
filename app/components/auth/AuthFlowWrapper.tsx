"use client"

import useAuthStore from "@/app/stores/authStore"
import AuthOverlay from "./AuthOverlay"
import AuthModal from "./AuthModal"
import Loader from "../Loader"

export default function AuthFlowWrapper() {

  const { phase } = useAuthStore()

  if (phase === "closed") return null

  return (
    <AuthOverlay>
      {phase === "auth" && <AuthModal />}
      {phase === "loading" && <Loader />}
    </AuthOverlay>
  )
}