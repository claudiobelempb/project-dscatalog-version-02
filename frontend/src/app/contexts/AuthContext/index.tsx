import React from 'react';
import { TokenUserData } from 'app/types/TokenUserData';
import { createContext, ReactNode, useState } from 'react';
import { removeLocalStorage } from 'app/utils/functions/removeLocalStorage';
import { AuthUserLocalDsCatalogStorage } from 'app/utils/request';

export type AuthContextData = {
  authenticated: boolean;
  tokenUserdata?: TokenUserData;
};

type AuthContextType = {
  authContextData: AuthContextData;
  setAuthContextData: (authContextData: AuthContextData) => void;
  handleLogout: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const contextValue: AuthContextType = {
  authContextData: {
    authenticated: true,
  },
  setAuthContextData: () => null,
  handleLogout: () => null,
};

const AuthContext = createContext<AuthContextType>(contextValue);

const AuthContextProvider: React.FC = ({ children }) => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  const handleLogout = () => {
    removeLocalStorage(AuthUserLocalDsCatalogStorage);
    setAuthContextData({
      authenticated: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{ authContextData, setAuthContextData, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
