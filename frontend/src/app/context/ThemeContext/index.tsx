import { createContext, ReactNode, useState } from 'react';

type TypeThemeProps = {
  children: ReactNode;
};

interface IThemeContext {
  theme: string;
}

const contextValue: IThemeContext = {
  theme: 'light',
};

const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeContexProvider: React.FC<TypeThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContexProvider };
