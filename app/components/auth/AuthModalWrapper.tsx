"use client"

import useAuthModalStore from "@/app/stores/authModalStore"
import AuthModal from "./AuthModal"

export default function AuthModalWrapper() {
  const { isOpen } = useAuthModalStore()

  if (isOpen) {
    return <AuthModal />
  } else {
    return null
  }
}