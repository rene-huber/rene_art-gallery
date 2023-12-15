import {create} from 'zustand'

const useStore = create(set => ({
  data: null,
  setData: (apiData) => set({ data: apiData }),
}));

export default useStore;
