import { create } from "zustand"

interface Card {
  id: string
  user_id: string
  question: string
  answer: string
  category: string
  mastery_level: number
  created_at: string
  updated_at: string
}

interface CardStore {
  cards: Card[]
  isLoading: boolean
  fetchCards: () => Promise<void>
}

const useCardStore = create<CardStore>((set) => ({
  cards: [],
  isLoading: true,
  fetchCards: async () => {
    set({ isLoading: true })
    const response = await fetch("/api/cards")
    if (response.ok) {
      const cards = await response.json()
      set({ cards, isLoading: false })
    } else {
      set({ cards: [], isLoading: false })
    }
  },
}))

export default useCardStore