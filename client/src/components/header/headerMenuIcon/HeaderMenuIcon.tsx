import React, { FC, useContext } from 'react';

import { HeaderCtx } from '../../../utils/context';

const HeaderMenuIcon: FC = () => {
  const { spans, menuOpen, openCloseMenu } = useContext(HeaderCtx);

  return (
    <div className="right">
      <div className="collapsing-menu" onClick={() => openCloseMenu(!menuOpen)}>
        {spans.map((span) => (
          <span key={span} className={`line${span}`} />
        ))}
      </div>
    </div>
  );
};

export default HeaderMenuIcon;
