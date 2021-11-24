import { AspectRatio, GridView } from '@mui/icons-material';
import React, { FC, useContext } from 'react';

import { PortfolioCtx } from '../../../utils/context';
import Button from '../../utils/button/Button';

const PortfolioView: FC = () => {
  const { setActivePage, itemsPerPage, setItemsPerPage } =
    useContext(PortfolioCtx);

  const switchView = () => {
    itemsPerPage === 1 ? setItemsPerPage(6) : setItemsPerPage(1);
    setActivePage(1);
  };

  return (
    <div className="view">
      <Button onClick={switchView}>
        {itemsPerPage === 1 ? <GridView /> : <AspectRatio />}

        <p>{itemsPerPage === 1 ? "Single" : "Grid"}</p>
      </Button>
    </div>
  );
};

export default PortfolioView;
