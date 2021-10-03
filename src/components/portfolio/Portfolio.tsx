import React, { FC } from 'react';
import { useFetchPortfolioData, useWindowTitle } from '../../utils/hooks';
import { portfolioPath } from '../../utils/route';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import Loader from '../utils/loader/Loader';
import './portfolio.scss';
import PortfolioItem from './portfolioItem/PortfolioItem';
import PortfolioPage from './portfolioPages/PortfolioPage';

interface Props extends IWithError, IWithWarning {
  portfolioData: IPortfolio[];
  setPortfolioData: (portfolioData: IPortfolio[]) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;

  active: number;
  setActivePage: (active: number) => void;

  pagesCount: number;
  setPagesCount: (pagesCount: number) => void;
}

const Portfolio: FC<Props> = ({
  portfolioData,
  setPortfolioData,

  loading,
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
          {new Array(pagesCount).fill(1).map((_, idx) => (
            <PortfolioPage
              key={idx}
              idx={idx}
              active={active === idx}
              setActive={setActivePage}
            />
          ))}
        </ul>

        {!loading ? (
          <div className="container">
            {portfolioData.map((item) => (
              <PortfolioItem
                key={item.id}
                imgSrc={item.imgSrc}
                title={item.title}
                link={`${portfolioPath}/${item.link}`}
              />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </ComponentWrapper>
  );
};

export default Portfolio;
