import { useReducer } from 'react';

type reducerState = {
  count: number;
};

type reducerAction = {
  type: string;
};

const initialState: reducerState = {
  count: 0,
};

const reducer = (state: reducerState, action: reducerAction) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 };
    case 'DEL':
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      }
      break;
    case 'RESET':
      return initialState;
  }

  return state;
};

export const UseCount = () => {
  return useReducer(reducer, initialState);
};
