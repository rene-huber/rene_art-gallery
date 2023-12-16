import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(persist(
  (set) => ({
    data: null,
    setData: (apiData) => set({ data: apiData }),

    artPiecesInfo: {},
    setArtPiece: (slug, isFavorite) => set(state => ({
      artPiecesInfo: {
        ...state.artPiecesInfo,
        [slug]: {
          ...state.artPiecesInfo[slug],
          isFavorite,
          }
      }
    })),
  }),
  {
    name: 'favorites-art-selected', 
    getStorage: () => localStorage, 
  }
));

export default useStore;
