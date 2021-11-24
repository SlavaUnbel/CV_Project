import React, { FC } from 'react';

import Portfolio from '../../components/portfolio/Portfolio';
import { PortfolioCtx } from '../../utils/context';
import {
  useFetchPortfolioData,
  useMouseWheel,
  useRedirectToItem,
  useScrollRedirect,
  useWindowTitle,
} from '../../utils/hooks';
import { homePath, worksPath } from '../../utils/route';

interface Props extends IWithLoading, IWithError, IWithWarning {
  data: IPortfolio[];
  setData: (data: IPortfolio[]) => void;

  active: number;
  setActivePage: (active: number) => void;

  pagesCount: number;
  setPagesCount: (pagesCount: number) => void;
}

const PortfolioContext: FC<Props> = ({
  data,
  setData,
  setLoading,

  active,
  setActivePage,

  pagesCount,
  setPagesCount,

  pushError,
  pushWarning,
}) => {
  useWindowTitle("Portfolio");

  useFetchPortfolioData({
    active,
    setData,
    setPagesCount,
    setLoading,
    pushError,
    pushWarning,
  });

  const paths = {
    goHome: useRedirectToItem(homePath),
    goToWorks: useRedirectToItem(worksPath),
  };
  const wheelDirection = useMouseWheel();
  const onWheel = useScrollRedirect(
    wheelDirection,
    paths.goHome,
    paths.goToWorks
  );

  const wrapperStyle = { height: "80vh" };

  return (
    <PortfolioCtx.Provider
      value={{
        data,
        setData,
        setLoading,

        active,
        setActivePage,

        pagesCount,
        setPagesCount,

        pushError,
        pushWarning,

        wrapperStyle,
        onWheel,
      }}
    >
      <Portfolio />
    </PortfolioCtx.Provider>
  );
};

export default PortfolioContext;
