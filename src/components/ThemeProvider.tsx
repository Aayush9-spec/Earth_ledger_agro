import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'teal' | 'light-blue';

interface ThemeProviderContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeProviderContext = createContext<ThemeProviderContext | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  ...props
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
} & React.ComponentProps<'div'>) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark', 'theme-teal', 'theme-light-blue');
    
    // Add the current theme class
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'teal') {
      root.classList.add('theme-teal');
    } else if (theme === 'light-blue') {
      root.classList.add('theme-light-blue');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};