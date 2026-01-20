import { create } from 'zustand'

type CategoryFilterStore = {
  selectedCategories: string[]
  toggleCategory: (id: string) => void
  clearCategories: () => void
}

export const useCardFilterStore = create<CategoryFilterStore>((set) => ({
  selectedCategories: [],
  toggleCategory: (id) => set((state) => ({
    selectedCategories: state.selectedCategories.includes(id)
      ? state.selectedCategories.filter(catId => catId !== id)
      : [...state.selectedCategories, id]
  })),
  clearCategories: () => set({ selectedCategories: [] })
})) 