import { AuthContextData } from 'app/contexts/AuthContext';
import { ReducerActioinType } from 'app/types/ReducerAtcionType';

export type AuthContextType = {
  authContextData: AuthContextData;
  setAuthContextData: (authContextData: AuthContextData) => void;
  handleLogout: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const AuthInitialState: AuthContextType = {
  authContextData: {
    authenticated: false,
  },
  setAuthContextData: () => null,
  handleLogout: () => null,
};

export const AuthReducer = (
  state: AuthContextType,
  action: ReducerActioinType,
  // action: reducerActioinType<UserType>,
) => {
  switch (action.type) {
    case 'SET_AUTH':
      return { ...state, authenticated: action.payload.authenticated };
    case 'HANDLE_LOGOUT':
      return { ...state, authenticated: action.payload.authenticated };
  }

  return state;
};
