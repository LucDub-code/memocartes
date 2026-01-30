import { create } from 'zustand'
import useCardStore from './cardStore'

type CategoryFilterStore = {
  selectedCategories: string[]
  hideMemorized: boolean
  toggleCategory: (id: string) => void
  toggleHideMemorized: () => void
  clearCategories: () => void
  resetStore: () => void
}

export const useCardFilterStore = create<CategoryFilterStore>((set, get) => ({
  selectedCategories: [],
  hideMemorized: false,

  toggleCategory: (id) => {
    const state = get()
    const newCategories = state.selectedCategories.includes(id)
      ? state.selectedCategories.filter(catId => catId !== id)
      : [...state.selectedCategories, id]

    useCardStore.getState().rebuildCardsDisplayedCards(newCategories, state.hideMemorized)
    set({ selectedCategories: newCategories })
  },

  toggleHideMemorized: () => {
    const state = get()
    const newHideMemorized = !state.hideMemorized

    useCardStore.getState().rebuildCardsDisplayedCards(state.selectedCategories, newHideMemorized)
    set({ hideMemorized: newHideMemorized })
  },

  clearCategories: () => {
    const state = get()
    useCardStore.getState().rebuildCardsDisplayedCards([], state.hideMemorized)
    set({ selectedCategories: [] })
  },

  resetStore: () => {
    set({
      selectedCategories: [],
      hideMemorized: false,
    })
  },

}))