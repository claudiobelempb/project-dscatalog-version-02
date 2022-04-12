import { ReducerActioinType } from 'app/types/ReducerAtcionType';
import React, { createContext, useReducer } from 'react';
import {
  UserType,
  userInitialState,
  userReducer,
} from '../../reducers/userReducer';
import {
  AuthContextType,
  AuthInitialState,
  AuthReducer,
} from '../../reducers/AuthReducer';

type AppInitialStateType = {
  user: UserType;
  auth: AuthContextType;
};

type AppContextType = {
  state: AppInitialStateType;
  // dispatch: React.Dispatch<React.SetStateAction<AppInitialStateType>>;
  dispatch: React.Dispatch<any>;
};

const AppInitialState = {
  user: userInitialState,
  auth: AuthInitialState,
};

export const AppContetx = createContext<AppContextType>({
  state: AppInitialState,
  dispatch: () => null,
});

const AppReducer = (
  state: AppInitialStateType,
  action: ReducerActioinType,
) => ({
  user: userReducer(state.user, action),
  auth: AuthReducer(state.auth, action),
});

export const AppContetxProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, AppInitialState);

  return (
    <AppContetx.Provider value={{ state, dispatch }}>
      {children}
    </AppContetx.Provider>
  );
};
