import { create } from 'zustand'

interface AuthStore {
  phase: "closed" | "auth" | "loading"
  openAuth: () => void
  startLoading: () => void
  stopLoading: () => void  // ← ajouter                                                              
  closeAuth: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  phase: "closed",
  openAuth: () => set({ phase: "auth" }),
  startLoading: () => set({ phase: "loading" }),
  stopLoading: () => set({ phase: "auth" }),  // ← revient à la modale                               
  closeAuth: () => set({ phase: "closed" }),
}))

export default useAuthStore