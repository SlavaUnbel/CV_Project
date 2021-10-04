import React, { FC } from 'react';
import {
  useGetMediaElement,
  useHover,
  useRedirectToItem,
} from '../../../utils/hooks';

interface Props {
  imgSrc: string;
  videoSrc: string;
  title: string;
  link: string;
}

const PortfolioItem: FC<Props> = ({ imgSrc, videoSrc, title, link }) => {
  const { hovered, setHovered } = useHover();

  const redirect = useRedirectToItem(link);

  const mediaElement = useGetMediaElement({ hovered, imgSrc, videoSrc });

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

      <h3>{title}</h3>
    </div>
  );
};

export default PortfolioItem;
