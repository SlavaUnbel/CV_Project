import React, { FC } from 'react';

interface Props {
  imgSrc: string;
  title: string;
}

const PortfolioItem: FC<Props> = ({ imgSrc, title }) => (
  <div className="item">
    <img src={imgSrc} alt="" />

    <h3>{title}</h3>
  </div>
);

export default PortfolioItem;
