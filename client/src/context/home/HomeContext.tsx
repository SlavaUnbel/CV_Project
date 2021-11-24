import React, { FC } from 'react';

import Home from '../../components/home/Home';
import { HomeCtx } from '../../utils/context';
import { useITypedLib, useMouseWheel, useRedirectToItem, useScrollRedirect, useWindowTitle } from '../../utils/hooks';
import { portfolioPath } from '../../utils/route';

const HomeContext: FC = () => {
  useWindowTitle("Homepage");

  const textRef = useITypedLib();

  const goToPortfolio = useRedirectToItem(portfolioPath);

  const wheelDirection = useMouseWheel();

  const onWheel = useScrollRedirect(wheelDirection, ...Array(1), goToPortfolio);

  return (
    <HomeCtx.Provider value={{ textRef, onWheel }}>
      <Home />
    </HomeCtx.Provider>
  );
};

export default HomeContext;
