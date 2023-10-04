import { create } from "zustand";

const useStateStore = create((set) => ({
  searchValue: "",
  selectedState: "",
  setSearchValue: (searchValue: string) => set(() => ({ searchValue })),
  setSelectedState: (selectedState: string) => set({ selectedState }),
}));

export default useStateStore;
