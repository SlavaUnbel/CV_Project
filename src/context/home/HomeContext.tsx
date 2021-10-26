import React, { FC } from 'react';
import Home from '../../components/home/Home';
import { HomeCtx } from '../../utils/context';
import { useITypedLib, useWindowTitle } from '../../utils/hooks';

const HomeContext: FC = () => {
  useWindowTitle();

  const textRef = useITypedLib();

  return (
    <HomeCtx.Provider value={{ textRef }}>
      <Home />
    </HomeCtx.Provider>
  );
};

export default HomeContext;
