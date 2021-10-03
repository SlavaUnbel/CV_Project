import React, { FC } from 'react';
import { useFetchPortfolioData } from '../../utils/hooks';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import Loader from '../utils/loader/Loader';
import './portfolio.scss';
import PortfolioItem from './portfolioItem/PortfolioItem';
import PortfolioPage from './portfolioPages/PortfolioPage';

interface Props {
  loading: boolean;
  setLoading: (loading: boolean) => void;

  active: number;
  setActivePage: (active: number) => void;

  pushError: (text: string) => void;
}

const Portfolio: FC<Props> = ({
  loading,
  setLoading,

  active,
  setActivePage,

  pushError,
}) => {
  const { data, pagesCount } = useFetchPortfolioData({
    active,
    setLoading,
    pushError,
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
    </ComponentWrapper>
  );
};

export default Portfolio;
