import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useGetMediaElement, useHover } from '../../../utils/hooks';

interface Props {
  item: IPortfolio;
}

const PortfolioItem: FC<Props> = ({ item }) => {
  const { hovered, setHovered } = useHover();

  const mediaElement = useGetMediaElement({ hovered, item });

  return (
    <div className="item">
      <div
        className="img-wrapper"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link to={item.link}>{mediaElement}</Link>
      </div>

      <h3>{item.title}</h3>
    </div>
  );
};

export default PortfolioItem;
