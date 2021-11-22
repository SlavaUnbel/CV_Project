import React, { FC, useContext } from 'react';
import { SplitLandingPageCtx } from '../../../../utils/context';

interface Props {
  page: ISplitLandingPage;
}

const SidePage: FC<Props> = ({ page }) => {
  const { enterLeft, enterRight, leaveLeft, leaveRight } =
    useContext(SplitLandingPageCtx);

  return (
    <div
      className={`split ${page.side}`}
      style={{ backgroundImage: `url(${page.background})` }}
      onMouseEnter={page.side === 'left' ? enterLeft : enterRight}
      onMouseLeave={page.side === 'left' ? leaveLeft : leaveRight}
    >
      <h1>{page.title}</h1>

      <a href={page.link} target="_blank" rel="noreferrer">
        Buy Now
      </a>
    </div>
  );
};

export default SidePage;
