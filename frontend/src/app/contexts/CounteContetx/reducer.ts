import { ReducerActioinType } from 'app/types/ReducerAtcionType';
import * as actionTypes from './ActionsTypes';

export type CounterContextType = {
  counter: number;
  loading: boolean;
};

export const CounterInitialState: CounterContextType = {
  counter: 0,
  loading: false,
};

export const reducer = (
  state: CounterContextType,
  action: ReducerActioinType,
) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREASE:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.RESET:
      return { ...CounterInitialState };
    case actionTypes.SET_COUNTER:
      return { ...state, ...action.payload };
    case actionTypes.ASYNC_INCRASE_START:
      return { ...state, loading: true };
    case actionTypes.ASYNC_INCRASE_END:
      return { ...state, loading: false, counter: state.counter + 1 };
    case actionTypes.ASYNC_INCRASE_ERROR:
      return { ...state, loading: false };
  }

  return state;
};
