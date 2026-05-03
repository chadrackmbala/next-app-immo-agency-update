// src/utils/useMenuStore.ts
import { create } from 'zustand';

type OperationStore = {
  isCliked: boolean;
  setIsCliked: (value: boolean) => void;
  toggleContext: () => void;
};

const useOperationContextProvider = create<OperationStore>((set) => ({
  isCliked: false,

  setIsCliked: (value) => set({ isCliked: value }),

  toggleContext: () =>
    set((state) => ({ isCliked: !state.isCliked })),
}));

export default useOperationContextProvider;