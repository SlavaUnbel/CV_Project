import React, { FC } from 'react';

interface Props {
  pageNumber: number;
  active: boolean;
  setActive: (active: number) => void;
}

const PortfolioPage: FC<Props> = ({ pageNumber, active, setActive }) => (
  <li
    className={active ? 'active' : ''}
    onClick={() => setActive(pageNumber)}
  >{`${pageNumber + 1}${
    pageNumber === 0
      ? 'st'
      : pageNumber === 1
      ? 'nd'
      : pageNumber === 2
      ? 'rd'
      : 'th'
  } Page`}</li>
);

export default PortfolioPage;
