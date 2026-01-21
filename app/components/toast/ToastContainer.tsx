"use client"

import { useEffect } from "react"
import { AnimatePresence } from "motion/react"

import useToastStore from "@/app/stores/toastStore"
import ToastItem from "./ToastItem"

export default function ToastContainer() {
  
  const { isOpen, message, hideToast } = useToastStore()

  useEffect(() => {
    if (!isOpen) return
    const t = setTimeout(hideToast, 3000)
    return () => clearTimeout(t)
  }, [isOpen, hideToast])

  return (
    <AnimatePresence>
      {isOpen && (
        <ToastItem message={message} onClose={hideToast} />
      )}
    </AnimatePresence>
  )
}
