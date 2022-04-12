import * as actionTypes from './ActionsTypes';

export const BuildActions = (dispatch: React.Dispatch<any>) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
  };
};
