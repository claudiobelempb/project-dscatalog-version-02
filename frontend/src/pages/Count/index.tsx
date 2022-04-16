import React from 'react';

import { LayoutHome } from 'components/Layout/LayoutHome';
import { UseCount } from 'hooks/UseCount';

const CountPage: React.FC = () => {
  const [state, dispatch] = UseCount();

  const increment = () => {
    dispatch({ type: 'ADD' });
  };

  const decrement = () => {
    dispatch({ type: 'DEL' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <LayoutHome>
      <h1>Count: {state.count}</h1>

      <button onClick={increment} className="btn btn-primary me-3">
        +
      </button>
      <button onClick={decrement} className="btn btn-danger me-3">
        -
      </button>
      <button onClick={reset} className="btn btn-danger">
        c
      </button>
    </LayoutHome>
  );
};

export default CountPage;
