import React, { FC } from 'react';
import { useRedirectToItem } from '../../../utils/hooks';

interface Props {
  imgSrc: string;
  title: string;
  link: string;
}

const PortfolioItem: FC<Props> = ({ imgSrc, title, link }) => {
  const redirect = useRedirectToItem(link);

  return (
    <div className="item">
      <div className="img-wrapper" onClick={redirect}>
        <img src={imgSrc} alt="" />
      </div>

      <h3>{title}</h3>
    </div>
  );
};

export default PortfolioItem;
