import {create} from 'zustand'

const useStore = create(set => ({
  data: null,
  setData: (apiData) => set({ data: apiData }),

  artPieceInfo: null,
  setInfo: (artPieceInfo) => set({ info: artPieceInfo }),
}));

export default useStore;
