import React from 'react';
// import { UserCounterContext } from 'app/contexts/CounteContetx';

import { Header } from 'components/Header';

type LayoutHomeProps = {
  children: React.ReactNode;
};

const LayoutHome: React.FC<LayoutHomeProps> = ({ children }) => {
  // const { state, dispatch } = UserCounterContext();

  // console.log(state);
  // console.log(dispatch);

  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
};

export { LayoutHome };
