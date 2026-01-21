import { create } from "zustand"

type CardModalType = "edit" | "delete" | null

interface CardModalStore {
  modal: CardModalType
  openEditModal: () => void
  openDeleteModal: () => void
  closeModal: () => void
}

const useCardModalStore = create<CardModalStore>((set) => ({
  modal: null,
  openEditModal: () => set({ modal: "edit" }),
  openDeleteModal: () => set({ modal: "delete" }),
  closeModal: () => set({ modal: null }),
}))

export default useCardModalStore
