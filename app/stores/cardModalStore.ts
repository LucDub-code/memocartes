import { create } from "zustand"

type CardModalPhase = "closed" | "edit" | "delete" | "loading"

interface CardModalStore {
  phase: CardModalPhase
  openEditModal: () => void
  openDeleteModal: () => void
  startLoading: () => void
  closeModal: () => void
}

const useCardModalStore = create<CardModalStore>((set) => ({
  phase: "closed",
  openEditModal: () => set({ phase: "edit" }),
  openDeleteModal: () => set({ phase: "delete" }),
  startLoading: () => set({ phase: "loading" }),
  closeModal: () => set({ phase: "closed" }),
}))

export default useCardModalStore
