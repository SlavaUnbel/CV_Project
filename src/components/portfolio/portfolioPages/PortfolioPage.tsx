import React, { FC } from 'react';

interface Props {
  idx: number;
  active: boolean;
  setActive: (active: number) => void;
}

const PortfolioPage: FC<Props> = ({ idx, active, setActive }) => (
  <li className={active ? 'active' : ''} onClick={() => setActive(idx)}>{`${
    idx + 1
  }${idx === 0 ? 'st' : idx === 1 ? 'nd' : idx === 2 ? 'rd' : 'th'} Page`}</li>
);

export default PortfolioPage;
