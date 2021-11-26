import React, { FC, useContext } from 'react';

import { PortfolioCtx } from '../../../utils/context';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';

const ItemsWrapper: FC = (props) => {
  const { wrapperStyle } = useContext(PortfolioCtx);

  return (
    <LoaderWrapper wrapperStyle={wrapperStyle}>
      <div className="container">{props.children}</div>
    </LoaderWrapper>
  );
};

export default ItemsWrapper;
