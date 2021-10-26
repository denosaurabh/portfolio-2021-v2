import create from 'zustand';

interface CursorAlertState {
  alert: string;
  setAlert: (newAlert: string) => void;
}

const useCursorAlert = create<CursorAlertState>((set) => ({
  alert: '',
  setAlert: (newAlert) => set(() => ({ alert: newAlert })),
}));

export default useCursorAlert;
