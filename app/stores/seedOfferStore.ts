import { create } from "zustand"

export const DISMISS_KEY = "memocartes:seed-offer-dismissed"

interface SeedOfferStore {
  isOpen: boolean
  open: () => void
  close: () => void
  dismiss: () => void
}

const useSeedOfferStore = create<SeedOfferStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  dismiss: () => {
    localStorage.setItem(DISMISS_KEY, "1")
    set({ isOpen: false })
  },
}))

export default useSeedOfferStore