import React, {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from 'react';
import { BuildActions } from './BuildActions';
import { reducer } from './reducer';

type CounterContextProviderProps = {
  children: ReactNode;
};

type CounterContextInitialStateType = {
  counter: number;
  loading: boolean;
};

type CounterContextType = {
  state: CounterContextInitialStateType;
  // dispatch: React.Dispatch<any>;
  dispatch: React.Dispatch<any>;
  // action: React.Dispatch<React.SetStateAction<CounterContextInitialStateType>>;
};

export const CounterInitialState: CounterContextInitialStateType = {
  counter: 0,
  loading: false,
};

const CounterContext = createContext<CounterContextType>({
  state: CounterInitialState,
  dispatch: () => null,
});

export const CounterContextProvider: React.FC<CounterContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, CounterInitialState);
  // const actions = BuildActions(dispatch);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const UserCounterContext = () => {
  const context = useContext(CounterContext);
  if (typeof context === 'undefined') {
    throw new Error(
      'you have to use useCounterContetx in <CounterContextProvider />',
    );
  }
  return { ...context };
};
