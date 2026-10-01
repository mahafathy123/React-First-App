import { create } from 'zustand';

const useThemeStore = create((set) => ({
  isDarkMode: localStorage.getItem('theme') ? localStorage.getItem('theme') === 'Dark' :false,
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.isDarkMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
          
      if (newMode) {
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
      }
      
      return { isDarkMode: newMode };
    }),
}));

export default useThemeStore;