import React, { FC } from 'react';
import { useFetchPortfolioData, useWindowTitle } from '../../utils/hooks';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../utils/loaderWrapper/LoaderWrapper';
import './portfolio.scss';
import PortfolioItem from './portfolioItem/PortfolioItem';
import PortfolioPage from './portfolioPages/PortfolioPage';

interface Props extends IWithLoading, IWithError, IWithWarning {
  portfolioData: IPortfolio[];
  setPortfolioData: (portfolioData: IPortfolio[]) => void;

  active: number;
  setActivePage: (active: number) => void;

  pagesCount: number;
  setPagesCount: (pagesCount: number) => void;
}

const Portfolio: FC<Props> = ({
  portfolioData,
  setPortfolioData,
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
    setPortfolioData,
    setPagesCount,
    setLoading,
    pushError,
    pushWarning,
  });

  return (
    <ComponentWrapper>
      <div className="portfolio">
        <h1>Portfolio</h1>

        <ul>
          {Array.from({ length: pagesCount }, (_, i) => i).map((page) => (
            <PortfolioPage
              key={page}
              pageNumber={page}
              active={active === page}
              setActive={setActivePage}
            />
          ))}
        </ul>

        <LoaderWrapper wrapperStyle={{ height: '80vh' }}>
          <div className="container">
            {portfolioData.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
        </LoaderWrapper>
      </div>
    </ComponentWrapper>
  );
};

export default Portfolio;
