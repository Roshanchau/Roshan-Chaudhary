"use client"

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (newTheme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light', // default theme
      setTheme: (newTheme: 'light' | 'dark') => set({ theme: newTheme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'theme', 
    }
  )
);
