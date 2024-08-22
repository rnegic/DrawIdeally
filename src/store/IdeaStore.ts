import create from 'zustand';

interface IdeaStore {
    generatedIdea: string | null;
    setGeneratedIdea: (idea: string | null) => void;
}

const useIdeaStore = create<IdeaStore>((set) => ({
    generatedIdea: null,
    setGeneratedIdea: (idea) => set({ generatedIdea: idea }),
}));

export default useIdeaStore;