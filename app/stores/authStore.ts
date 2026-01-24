import { create } from 'zustand'

interface AuthStore {
  phase: "closed" | "auth" | "loading"
  openAuth: () => void
  startLoading: () => void
  stopLoading: () => void
  closeAuth: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  phase: "closed",
  openAuth: () => set({ phase: "auth" }),
  startLoading: () => set({ phase: "loading" }),
  stopLoading: () => set({ phase: "auth" }),
  closeAuth: () => set({ phase: "closed" }),
}))

export default useAuthStore 