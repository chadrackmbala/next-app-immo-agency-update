import { create } from 'zustand';

type SubMenu = 'location' | 'achat' | 'vente' | null;

type MenuStore = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;

  formOpen: boolean;
  setFormOpen: (value: boolean) => void;

  overLay: boolean;
  setOverLay: (value: boolean) => void;

  openSubMenu: SubMenu;
  setOpenSubMenu: (value: SubMenu) => void;

  closeAllMenus: () => void;
};

const useMenuStore = create<MenuStore>((set) => ({
  // 🔹 Menu mobile principal
  isOpen: false,
  setOpen: (value) => set({ isOpen: value }),

  // 🔹 Formulaire
  formOpen: false,
  setFormOpen: (value) => set({ formOpen: value }),

  // 🔹 Overlay
  overLay: false,
  setOverLay: (value) => set({ overLay: value }),

  // 🔹 Sous-menus
  openSubMenu: null,
  setOpenSubMenu: (value) => set({ openSubMenu: value }),

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