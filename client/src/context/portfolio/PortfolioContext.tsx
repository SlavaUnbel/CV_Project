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
import { contactPath, homePath } from '../../utils/route';

interface Props extends IWithLoading, IWithError, IWithWarning {
  data: IPortfolio[];
  setData: (data: IPortfolio[]) => void;

  filteredData: IPortfolio[];
  setFilteredData: (data: IPortfolio[]) => void;

  active: number;
  setActivePage: (active: number) => void;

  pagesCount: number;
  setPagesCount: (pagesCount: number) => void;

  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;

  criteria: string;
  setCriteria: (criteria: string) => void;
}

const PortfolioContext: FC<Props> = ({
  data,
  setData,
  setLoading,

  filteredData,
  setFilteredData,

  active,
  setActivePage,

  pagesCount,
  setPagesCount,

  itemsPerPage,
  setItemsPerPage,

  criteria,
  setCriteria,

  pushError,
  pushWarning,
}) => {
  useWindowTitle("Portfolio");

  useFetchPortfolioData({
    active,
    itemsPerPage,
    criteria,
    setData,
    setFilteredData,
    setPagesCount,
    setLoading,
    pushError,
    pushWarning,
  });

  const paths = {
    goHome: useRedirectToItem(homePath),
    goToContact: useRedirectToItem(contactPath),
  };
  const wheelDirection = useMouseWheel();
  const onWheel = useScrollRedirect(
    wheelDirection,
    paths.goHome,
    paths.goToContact
  );

  const wrapperStyle = { flex: 2 };

  return (
    <PortfolioCtx.Provider
      value={{
        data,
        setData,
        setLoading,

        filteredData,
        setFilteredData,

        active,
        setActivePage,

        pagesCount,
        setPagesCount,

        itemsPerPage,
        setItemsPerPage,

        criteria,
        setCriteria,

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
