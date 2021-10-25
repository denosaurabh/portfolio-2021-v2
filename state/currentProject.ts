import create from 'zustand';

interface CurrentProjectState {
  currentProject: string;
  setCurrentProject: (project: string) => void;
}

const useCurrentProject = create<CurrentProjectState>((set) => ({
  currentProject: '',
  setCurrentProject: (project) => set(() => ({ currentProject: project })),
}));

export default useCurrentProject;
