import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { FC, useContext } from 'react';

import { isMobile } from '../../../utils/constants';
import { PortfolioCtx } from '../../../utils/context';
import { usePortfolioPagination } from '../../../utils/hooks';

const PortfolioPagination: FC = () => {
  const { active, pagesCount, itemsPerPage, setActivePage } =
    useContext(PortfolioCtx);

  const { disabled, paginationValue, inputHandlers } = usePortfolioPagination({
    active,
    pagesCount,
    setActivePage,
  });

  return (
    <div className="pagination-wrapper">
      <small>pages</small>

      <div className="pagination">
        <IconButton
          onClick={() => setActivePage(active - 1)}
          disabled={active === 1}
          size={isMobile ? "small" : "medium"}
        >
          <ArrowBackIosNew fontSize={isMobile ? "small" : "medium"} />
        </IconButton>

        <input
          placeholder={`Enter ${itemsPerPage === 1 ? "Work" : "Page"}`}
          value={disabled ? paginationValue : undefined}
          onFocus={(e) => inputHandlers.onFocus(e)}
          onInput={(e) => inputHandlers.onInput(e)}
          onBlur={(e) => inputHandlers.onBlur(e)}
          onKeyPress={(e) => inputHandlers.onKeyPress(e)}
        />

        <IconButton
          onClick={() => setActivePage(active + 1)}
          disabled={active === pagesCount}
          size={isMobile ? "small" : "medium"}
        >
          <ArrowForwardIos fontSize={isMobile ? "small" : "medium"} />
        </IconButton>
      </div>
    </div>
  );
};

export default PortfolioPagination;
