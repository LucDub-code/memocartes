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
  nextCard: (selectedCategories?: string[]) => void                                                    
  prevCard: (selectedCategories?: string[]) => void
  setIsFlipped: (flipped: boolean) => void
  shuffleCards: () => void
  getFilteredCards: (selectedCategories: string[]) => Card[]
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

  getFilteredCards: (selectedCategories) => {
    const { cards } = get()
    if (selectedCategories.length === 0) return cards
    return cards.filter(card => selectedCategories.includes(card.category))
  },

  nextCard: (selectedCategories = []) => {
    const filteredCards = get().getFilteredCards(selectedCategories)
    if (filteredCards.length === 0) return
    set({
      isFlipped: false,
      currentIndex: (get().currentIndex + 1) % filteredCards.length
    })
  },

  prevCard: (selectedCategories = []) => {
    const filteredCards = get().getFilteredCards(selectedCategories)
    if (filteredCards.length === 0) return
    set({
      isFlipped: false,
      currentIndex: (get().currentIndex - 1 + filteredCards.length) % filteredCards.length
    })
  },

  shuffleCards: () => {
    const { cards } = get()
    const shuffled = [...cards]                                                                        
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    set({ cards: shuffled, currentIndex: 0, isFlipped: false })
  },
}))

export default useCardStore