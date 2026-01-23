
export const API_ENDPOINTS = {
  CREATE_CARD: "/api/cards",
  UPDATE_CARD: (id: string) => `/api/cards/${id}`,
  DELETE_CARD: (id: string) => `/api/cards/${id}`,
} as const
