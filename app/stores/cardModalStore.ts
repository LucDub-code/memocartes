import { create } from "zustand"

type CardModalType = "edit" | "delete" | null

type CardData = {
  id: string
  question: string
  answer: string
  category: string
}

interface CardModalStore {
  modal: CardModalType
  isLoading: boolean
  cardId: string | null
  cardData: CardData | null
  openEditModal: (card: CardData) => void
  openDeleteModal: (cardId: string) => void
  startLoading: () => void
  stopLoading: () => void
  closeModal: () => void
}

const useCardModalStore = create<CardModalStore>((set) => ({
  modal: null,
  isLoading: false,
  cardId: null,
  cardData: null,
  openEditModal: (card) => set({ modal: "edit", isLoading: false, cardId: card.id, cardData: card }),
  openDeleteModal: (cardId) => set({ modal: "delete", isLoading: false, cardId }),
  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),
  closeModal: () => set({ modal: null, isLoading: false, cardId: null, cardData: null }),
}))

export default useCardModalStore
