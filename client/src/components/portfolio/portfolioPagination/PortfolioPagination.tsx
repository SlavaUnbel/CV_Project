import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { FC, useContext } from 'react';

import { PortfolioCtx } from '../../../utils/context';
import { usePortfolioPagination } from '../../../utils/hooks';

const PortfolioPagination: FC = () => {
  const { active, pagesCount, itemsPerPage, setActivePage } =
    useContext(PortfolioCtx);

  const { disabled, paginationValue, inputHandlers } = usePortfolioPagination({
    active,
    pagesCount,
    itemsPerPage,
    setActivePage,
  });

  return (
    <div className="pagination">
      <IconButton
        onClick={() => setActivePage(active - 1)}
        disabled={active === 1}
      >
        <ArrowLeft />
      </IconButton>

      <input
        placeholder={`Enter ${itemsPerPage === 1 ? "Work" : "Page"}`}
        value={disabled ? paginationValue : undefined}
        onFocus={(e) => inputHandlers.onFocus(e)}
        onInput={(e) => inputHandlers.onInput(e)}
        onBlur={(e) => inputHandlers.onBlur(e)}
      />

      <IconButton
        onClick={() => setActivePage(active + 1)}
        disabled={active === pagesCount}
      >
        <ArrowRight />
      </IconButton>
    </div>
  );
};

export default PortfolioPagination;
