import React, { FC, useContext } from 'react';
import { PortfolioCtx } from '../../../utils/context';

interface Props {
  pageNumber: number;
}

const PortfolioPage: FC<Props> = ({ pageNumber }) => {
  const { active, setActivePage } = useContext(PortfolioCtx);

  return (
    <li
      className={active === pageNumber ? 'active' : ''}
      onClick={() => setActivePage(pageNumber)}
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
};

export default PortfolioPage;
