"use client"

import { useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import useAuthStore from "@/app/stores/authStore"
import { useSession } from "@/lib/auth-client"

export default function OpenAuthFromQuery() {
  const params = useSearchParams()
  const router = useRouter()
  const { openAuth, phase } = useAuthStore()
  const { data: session } = useSession()

  const nextRef = useRef<string | null>(null)

  useEffect(() => {
    const wantsAuth = params.get("auth") === "1"
    const next = params.get("next")

    if (wantsAuth && next && !session) {
      nextRef.current = next
      openAuth()
      router.replace("/")
    }
  }, [params, session, openAuth, router])

  useEffect(() => {
    if (session && nextRef.current) {
      router.replace(nextRef.current)
      nextRef.current = null
    }
  }, [session, router])

  useEffect(() => {
    if (phase === "closed" && !session) {
      nextRef.current = null
    }
  }, [phase, session])

  return null
}
