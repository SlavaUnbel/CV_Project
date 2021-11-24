import './portfolio.scss';

import React, { FC, useContext } from 'react';

import { PortfolioCtx } from '../../utils/context';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import ItemsWrapper from './itemsWrapper/ItemsWrapper';
import PortfolioItem from './portfolioItem/PortfolioItem';
import PortfolioPage from './portfolioPages/PortfolioPage';

const Portfolio: FC = () => {
  const { pagesCount, data, onWheel } = useContext(PortfolioCtx);

  return (
    <ComponentWrapper>
      <div className="portfolio" onWheel={onWheel}>
        <h1>Portfolio</h1>

        <ul>
          {Array.from({ length: pagesCount }, (_, i) => i).map((page) => (
            <PortfolioPage key={page} pageNumber={page} />
          ))}
        </ul>

        <ItemsWrapper>
          {data.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </ItemsWrapper>
      </div>
    </ComponentWrapper>
  );
};

export default Portfolio;
