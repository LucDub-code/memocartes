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
    <div className="fixed top-29 left-0 right-0 pointer-events-none z-50">
      <div className="mx-auto max-w-360 px-4 sm:px-8 xl:px-25 flex justify-end">
        <AnimatePresence>
          {isOpen && (
            <ToastItem message={message} onClose={hideToast} />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
