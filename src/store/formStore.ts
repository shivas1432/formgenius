import { create } from 'zustand';

interface FormState {
  formsCreated: number;
  maxForms: number;
  isPro: boolean;
  incrementFormsCreated: () => void;
  setIsPro: (value: boolean) => void;
}

export const useFormStore = create<FormState>((set) => ({
  formsCreated: 0,
  maxForms: 3,
  isPro: false,
  incrementFormsCreated: () => set((state) => ({ formsCreated: state.formsCreated + 1 })),
  setIsPro: (value) => set({ isPro: value }),
}));