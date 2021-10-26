import React, { FC } from 'react';
import Portfolio from '../../components/portfolio/Portfolio';
import { PortfolioCtx } from '../../utils/context';
import { useFetchPortfolioData, useWindowTitle } from '../../utils/hooks';

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
  useWindowTitle('Portfolio');

  useFetchPortfolioData({
    active,
    setData,
    setPagesCount,
    setLoading,
    pushError,
    pushWarning,
  });

  const wrapperStyle = { height: '80vh' };

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
      }}
    >
      <Portfolio />
    </PortfolioCtx.Provider>
  );
};

export default PortfolioContext;
