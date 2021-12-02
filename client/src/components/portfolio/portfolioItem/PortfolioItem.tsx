import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { PortfolioCtx } from '../../../utils/context';
import { useGetMediaElement, useHover } from '../../../utils/hooks';

interface Props {
  item: IPortfolio;
}

const PortfolioItem: FC<Props> = ({ item }) => {
  const { itemsPerPage } = useContext(PortfolioCtx);

  const [loaded, setLoaded] = useState(false);

  const { hovered, setHovered } = useHover();

  const mediaElement = useGetMediaElement({ hovered, item, loaded, setLoaded });

  return (
    <div className={`item ${itemsPerPage === 1 ? "scaled" : ""}`}>
      <div
        className={`img-wrapper ${item.criteria}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setLoaded(false);
          setHovered(false);
        }}
      >
        <Link to={item.link}>{mediaElement}</Link>
      </div>

      <h3>{item.title}</h3>
    </div>
  );
};

export default PortfolioItem;
