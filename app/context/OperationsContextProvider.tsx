// src/utils/useMenuStore.js
import { create } from 'zustand';

type OperationContext = {
  isCliked: boolean;
  setIsCliked: (value: boolean) => void;
  toggleContext: () => void;
};

const useOperationContextProvider = create<OperationContext>((set) => ({
  isCliked: false,
  setIsCliked: (value: boolean) => set({ isCliked: value }),
  toggleContext: () => set((state) => ({ isCliked: !state.isCliked })),
}));

export default useOperationContextProvider;
