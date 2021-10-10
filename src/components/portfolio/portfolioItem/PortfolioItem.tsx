import React, { FC } from 'react';
import {
  useGetMediaElement,
  useHover,
  useRedirectToItem,
} from '../../../utils/hooks';

interface Props {
  item: IPortfolio;
}

const PortfolioItem: FC<Props> = ({ item }) => {
  const { hovered, setHovered } = useHover();

  const redirect = useRedirectToItem(item.link);

  const mediaElement = useGetMediaElement({ hovered, item });

  return (
    <div className="item">
      <div
        className="img-wrapper"
        onClick={redirect}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {mediaElement}
      </div>

      <h3>{item.title}</h3>
    </div>
  );
};

export default PortfolioItem;
