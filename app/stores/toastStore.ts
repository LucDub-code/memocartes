import { create } from "zustand"

type ToastStore = {
  isOpen: boolean
  message: string
  showToast: (message: string) => void
  hideToast: () => void
}

const useToastStore = create<ToastStore>((set) => ({
  isOpen: false,
  message: "",
  showToast: (message) => set({ isOpen: true, message }),
  hideToast: () => set({ isOpen: false, message: "" }),
}))

export default useToastStore
