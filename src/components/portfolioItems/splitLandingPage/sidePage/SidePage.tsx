import React, { FC } from 'react';

interface Props {
  page: ISplitLandingPage;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const SidePage: FC<Props> = ({ page, onMouseEnter, onMouseLeave }) => (
  <div
    className={`split ${page.side}`}
    style={{ backgroundImage: `url(${page.background})` }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <h1>{page.title}</h1>

    <a href={page.link} target="_blank" rel="noreferrer">
      Buy Now
    </a>
  </div>
);

export default SidePage;
