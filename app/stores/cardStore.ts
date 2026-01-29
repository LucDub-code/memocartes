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
  currentIndex: number
  isFlipped: boolean
  fetchCards: () => Promise<void>
  refreshCards: () => Promise<void>
  nextCard: () => void
  prevCard: () => void
  setIsFlipped: (flipped: boolean) => void
  shuffleCards: () => void
}

const useCardStore = create<CardStore>((set, get) => ({

  cards: [],
  isLoading: true,
  currentIndex: 0,

  fetchCards: async () => {
    set({ isLoading: true, currentIndex: 0 })
    const response = await fetch("/api/cards")
    if (response.ok) {
      const cards = await response.json()
      set({ cards, isLoading: false })
    } else {
      set({ cards: [], isLoading: false })
    }
  },

  refreshCards: async () => {
    const response = await fetch("/api/cards")
    if (response.ok) {
      const cards = await response.json()
      set({ cards })
    }
  },

  isFlipped: false,

  setIsFlipped: (flipped) => set({ isFlipped: flipped }),

  nextCard: () => {
    const { cards, currentIndex } = get()
    set({
      isFlipped: false,
      currentIndex: (currentIndex + 1) % cards.length
    })
  },

  prevCard: () => {
    const { cards, currentIndex } = get()
    set({
      isFlipped: false,
      currentIndex: (currentIndex - 1 + cards.length) % cards.length
    })
  },

  shuffleCards: () => {
    const { cards } = get()
    const shuffled = [...cards]
    // Fisher-Yates shuffle                                                                          
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    set({ cards: shuffled, currentIndex: 0, isFlipped: false })
  },
}))

export default useCardStore