import create from 'zustand';

interface NavState {
  showNavButton: boolean;
  showNav: boolean;
  setShowNav: (b: boolean) => void;
  setShowNavButton: (b: boolean) => void;
}

const useNav = create<NavState>((set) => ({
  showNavButton: false,
  showNav: false,
  setShowNav: (bol) => set(() => ({ showNav: bol })),
  setShowNavButton: (bol) => set(() => ({ showNavButton: bol })),
}));

export default useNav;
