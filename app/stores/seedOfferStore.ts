import { create } from "zustand"

export const DISMISS_KEY = "memocartes:seed-offer-dismissed"

interface SeedOfferStore {
  isOpen: boolean
  isCelebrating: boolean
  open: () => void
  close: () => void
  dismiss: () => void
  celebrate: () => void
  stopCelebrating: () => void
}

const useSeedOfferStore = create<SeedOfferStore>((set) => ({
  isOpen: false,
  isCelebrating: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  dismiss: () => {
    localStorage.setItem(DISMISS_KEY, "1")
    set({ isOpen: false })
  },
  celebrate: () => set({ isCelebrating: true }),
  stopCelebrating: () => set({ isCelebrating: false }),
}))

export default useSeedOfferStore