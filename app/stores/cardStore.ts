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
  studyDisplayedCards: Card[]
  cardsDisplayedCards: Card[]
  isLoading: boolean
  currentIndex: number
  isFlipped: boolean
  fetchCards: () => Promise<void>
  refreshCards: () => Promise<void>
  rebuildStudyDisplayedCards: (selectedCategories: string[], hideMemorized: boolean) => void
  rebuildCardsDisplayedCards: (selectedCategories: string[], hideMemorized: boolean) => void
  nextCard: () => void
  prevCard: () => void
  setIsFlipped: (flipped: boolean) => void
  shuffleCards: () => void
  resetStore: () => void
}

const useCardStore = create<CardStore>((set, get) => ({

  cards: [],
  studyDisplayedCards: [],
  cardsDisplayedCards: [],
  isLoading: true,
  currentIndex: 0,
  isFlipped: false,

  fetchCards: async () => {
    set({ isLoading: true, currentIndex: 0 })
    const response = await fetch("/api/cards")
    if (response.ok) {
      const cards = await response.json()
      set({
        cards,
        studyDisplayedCards: cards,
        cardsDisplayedCards: cards,
        isLoading: false
      })
    } else {
      set({
        cards: [],
        studyDisplayedCards: [],
        cardsDisplayedCards: [],
        isLoading: false
      })
    }
  },

  refreshCards: async () => {
    const response = await fetch("/api/cards")
    if (response.ok) {
      const cards = await response.json()
      set({ cards })
    }
  },

  rebuildStudyDisplayedCards: (selectedCategories, hideMemorized) => {
    const { cards, currentIndex } = get()
    let filtered = cards

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(card => selectedCategories.includes(card.category))
    }

    if (hideMemorized) {
      filtered = filtered.filter(card => card.mastery_level < 5)
    }

    const safeIndex = filtered.length > 0
      ? Math.min(currentIndex, filtered.length - 1)
      : 0

    set({
      studyDisplayedCards: filtered,
      currentIndex: safeIndex
    })
  },

  rebuildCardsDisplayedCards: (selectedCategories, hideMemorized) => {
    const { cards } = get()
    let filtered = cards

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(card => selectedCategories.includes(card.category))
    }

    if (hideMemorized) {
      filtered = filtered.filter(card => card.mastery_level < 5)
    }

    set({ cardsDisplayedCards: filtered })
  },

  setIsFlipped: (flipped) => set({ isFlipped: flipped }),

  nextCard: () => {
    const { studyDisplayedCards, currentIndex } = get()
    if (studyDisplayedCards.length === 0) return
    set({
      isFlipped: false,
      currentIndex: (currentIndex + 1) % studyDisplayedCards.length
    })
  },

  prevCard: () => {
    const { studyDisplayedCards, currentIndex } = get()
    if (studyDisplayedCards.length === 0) return
    set({
      isFlipped: false,
      currentIndex: (currentIndex - 1 + studyDisplayedCards.length) % studyDisplayedCards.length
    })
  },

  shuffleCards: () => {
    const { studyDisplayedCards } = get()
    const shuffled = [...studyDisplayedCards]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    set({ studyDisplayedCards: shuffled, currentIndex: 0, isFlipped: false })
  },

  resetStore: () => {
    set({
      cards: [],
      studyDisplayedCards: [],
      cardsDisplayedCards: [],
      isLoading: false,
      currentIndex: 0,
      isFlipped: false,
    })
  },

}))

export default useCardStore