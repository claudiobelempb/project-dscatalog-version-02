import React, { createContext, ReactNode, useState } from 'react';

type TypeThemeProps = {
  children: ReactNode;
};

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const contextValue: IThemeContext = {
  theme: 'light',
  toggleTheme: () => null,
};

const ThemeContext = createContext<IThemeContext>(contextValue);

const ThemeContexProvider: React.FC<TypeThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContexProvider };
