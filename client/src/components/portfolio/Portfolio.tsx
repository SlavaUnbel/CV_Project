import './portfolio.scss';

import React, { FC, useContext } from 'react';

import { PortfolioCtx } from '../../utils/context';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import ItemsWrapper from './itemsWrapper/ItemsWrapper';
import PortfolioFilter from './portfolioFilter/PortfolioFilter';
import PortfolioItem from './portfolioItem/PortfolioItem';
import PortfolioPagination from './portfolioPagination/PortfolioPagination';
import PortfolioView from './portfolioView/PortfolioView';

const Portfolio: FC = () => {
  const { filteredData, pagesCount, onWheel } = useContext(PortfolioCtx);

  return (
    <ComponentWrapper>
      <div className="portfolio" onWheel={onWheel}>
        <h1>Portfolio</h1>

        <div className="options">
          <div className="filter-and-view">
            <PortfolioView />

            <PortfolioFilter />
          </div>

          {pagesCount > 0 && <PortfolioPagination />}
        </div>

        <ItemsWrapper>
          {filteredData.map((item) => (
            <PortfolioItem key={item._id} item={item} />
          ))}
        </ItemsWrapper>
      </div>
    </ComponentWrapper>
  );
};

export default Portfolio;
