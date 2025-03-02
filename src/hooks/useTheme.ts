import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  // Check if user has a saved preference or prefers dark mode
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      
      if (savedTheme) {
        return savedTheme;
      }
      
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    
    return 'light'; // Default to light theme
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, isDark]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, isDark, toggleTheme };
}