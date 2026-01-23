import { create } from "zustand"

type CardModalType = "edit" | "delete" | null

interface CardModalStore {
  modal: CardModalType
  isLoading: boolean
  openEditModal: () => void
  openDeleteModal: () => void
  startLoading: () => void
  stopLoading: () => void
  closeModal: () => void
}

const useCardModalStore = create<CardModalStore>((set) => ({
  modal: null,
  isLoading: false,
  openEditModal: () => set({ modal: "edit", isLoading: false }),
  openDeleteModal: () => set({ modal: "delete", isLoading: false }),
  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),       
  closeModal: () => set({ modal: null, isLoading: false }),
}))

export default useCardModalStore
