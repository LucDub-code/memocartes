import { create } from 'zustand'

interface AuthStore {
  phase: "closed" | "auth" | "loading"
  isAuthenticated: boolean                                                        
  openAuth: () => void
  startLoading: () => void
  stopLoading: () => void
  closeAuth: () => void
  setAuthenticated: (value: boolean) => void                                          
}

const useAuthStore = create<AuthStore>((set) => ({
  phase: "closed",
  isAuthenticated: false,                                                         
  openAuth: () => set({ phase: "auth" }),
  startLoading: () => set({ phase: "loading" }),
  stopLoading: () => set({ phase: "auth" }),
  closeAuth: () => set({ phase: "closed" }),
  setAuthenticated: (value) => set({ isAuthenticated: value }),                  
}))

export default useAuthStore 