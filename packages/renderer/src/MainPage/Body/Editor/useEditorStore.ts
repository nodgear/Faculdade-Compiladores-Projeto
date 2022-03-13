import create from 'zustand';

type state = {
    editorCode: string;
    setEditorCode: (editorCode: string) => void;
};

export const useEditorStore = create<state>(set => ({
    editorCode: '',
    setEditorCode: (editorCode: string) => set(() => ({ editorCode }))
}));
