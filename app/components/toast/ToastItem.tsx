"use client"

import { motion } from "motion/react"

type Props = {
  message: string
  onClose: () => void
}

export default function ToastItem({ message, onClose }: Props) {
  return (
    <motion.div
      className="w-75 h-10 px-4 py-2.5 rounded-full bg-white border border-ink flex items-center justify-between shadow-large-and-menu pointer-events-auto"
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 120, opacity: 0 }}
      transition={{ duration: 0.25, ease: "backOut" }}
    >
      <span className="text-preset-4-medium">{message}</span>
      <button onClick={onClose} className="cursor-pointer" aria-label="Fermer">
        <img src="/icons/icon-cross-muted.svg" alt="" className="w-4 text-blue" />
      </button>
    </motion.div>
  )
}  