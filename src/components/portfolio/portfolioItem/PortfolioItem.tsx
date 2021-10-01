import React, { FC } from 'react';

interface Props {
  imgSrc: string;
  title: string;
}

const PortfolioItem: FC<Props> = ({ imgSrc, title }) => (
  <div className="item">
    <div className="img-wrapper">
      <img src={imgSrc} alt="" />
    </div>

    <h3>{title}</h3>
  </div>
);

export default PortfolioItem;
