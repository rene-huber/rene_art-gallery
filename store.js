import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(persist(
  (set) => ({
    data: null,
    setData: (apiData) => set({ data: apiData }),

    artPiecesInfo: {},
    
    setArtPiece: (slug, artPieceData) => set(state => {
      const currentArtPiece = state.artPiecesInfo[slug] || { comments: [], isFavorite: false }

      return {
        artPiecesInfo: {
          ...state.artPiecesInfo,
          [slug]: {
            ...currentArtPiece,
            ...artPieceData,
           
            isFavorite: artPieceData.isFavorite !== undefined ? artPieceData.isFavorite : !currentArtPiece.isFavorite,
            comments: currentArtPiece.comments,
          }
        }
      }
    }),

    addComment: (slug, newComment) => set(state => {
      const artPiece = state.artPiecesInfo[slug] || { comments: [] };
      const updatedComments = [...artPiece.comments, newComment];

      return {
        artPiecesInfo: {
          ...state.artPiecesInfo,
          [slug]: {
            ...artPiece,
            comments: updatedComments,
          }
        }
      };
    }),
  }),
  {
    name: 'favorites-art-selected', 
    getStorage: () => localStorage,
  }
));

export default useStore
