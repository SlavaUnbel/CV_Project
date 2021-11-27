import React, { FC, useContext } from 'react';

import { PortfolioCtx } from '../../../utils/context';
import MUICustomSwitch from '../../utils/MUICustomSwitch/MUICustomSwitch';

const PortfolioView: FC = () => {
  const { setActivePage, itemsPerPage, setItemsPerPage } =
    useContext(PortfolioCtx);

  const switchView = () => {
    itemsPerPage === 1 ? setItemsPerPage(6) : setItemsPerPage(1);
    setActivePage(1);
  };

  return (
    <div className="view">
      <small>view</small>

      <MUICustomSwitch onChange={switchView} />
    </div>
  );
};

export default PortfolioView;
