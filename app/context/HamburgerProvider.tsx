// src/utils/useMenuStore.js
import { create } from 'zustand';

type SubMenu = 'location' | 'achat' | 'vente' | null;

type BooleanUpdater = boolean | ((prevState: boolean) => boolean);

type MenuStore = {
  isOpen: boolean;
  setOpen: (value: BooleanUpdater) => void;
  formOpen: boolean;
  setFormOpen: (value: BooleanUpdater) => void;
  overLay: boolean;
  setOverLay: (value: BooleanUpdater) => void;
  openSubMenu: SubMenu;
  setOpenSubMenu: (value: SubMenu) => void;
  closeAllMenus: () => void;
};

const useMenuStore = create<MenuStore>((set) => ({
  // 🔹 Menu mobile principal
  isOpen: false,
  setOpen: (value: BooleanUpdater) => set((state) => ({ isOpen: typeof value === 'function' ? value(state.isOpen) : value })),

  // 🔹 Popup formulaire
  formOpen: false,
  setFormOpen: (value: BooleanUpdater) => set((state) => ({ formOpen: typeof value === 'function' ? value(state.formOpen) : value })),

  // 🔹 Overlay
  overLay: false,
  setOverLay: (value: BooleanUpdater) => set((state) => ({ overLay: typeof value === 'function' ? value(state.overLay) : value })),

  // 🔹 Sous-menus
  openSubMenu: null,
  setOpenSubMenu: (value: SubMenu) => set({ openSubMenu: value }),

  // 🔥 ACTION GLOBALE
  closeAllMenus: () =>
    set({
      isOpen: false,
      formOpen: false,
      overLay: false,
      openSubMenu: null,
    }),
}));

export default useMenuStore;
