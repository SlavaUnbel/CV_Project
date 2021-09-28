import React, { FC, useEffect, useState } from 'react';
import { services } from '../../services/services';
import Loader from '../utils/loader/Loader';
import './portfolio.scss';
import PortfolioItem from './portfolioItem/PortfolioItem';
import PortfolioPage from './portfolioPages/PortfolioPage';

const Portfolio: FC = () => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState<IPortfolio[]>([]);
  const [pagesCount, setPagesCount] = useState(1);

  useEffect(() => {
    const amountPerPage = 6;
    const startIdx = selected * amountPerPage;
    const endIdx = startIdx + amountPerPage;

    setLoading(true);

    services.portfolioService
      .getPortfolioList()
      .then((data) => {
        setData(data.slice(startIdx, endIdx));
        setPagesCount(Math.floor(data.length / amountPerPage));
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {new Array(pagesCount).fill(1).map((_, idx) => (
          <PortfolioPage
            key={idx}
            idx={idx}
            active={selected === idx}
            setActive={setSelected}
          />
        ))}
      </ul>

      {!loading ? (
        <div className="container">
          {data.map((item) => (
            <PortfolioItem
              key={item.id}
              imgSrc={item.imgSrc}
              title={item.title}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Portfolio;
