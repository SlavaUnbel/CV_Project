import React, { FC } from 'react';

import IncrementingCounter from '../../components/portfolioItems/incrementingCounter/IncrementingCounter';
import { getIncrementingCounterItemsInfo } from '../../services/databaseMethods';
import { IntcrementingCounterCtx } from '../../utils/context';
import { useWindowTitle } from '../../utils/hooks';

const IncrementingCounterContext: FC = () => {
  useWindowTitle("Incrementing Counter");

  const data = getIncrementingCounterItemsInfo();

  return (
    <IntcrementingCounterCtx.Provider value={{ data }}>
      <IncrementingCounter />
    </IntcrementingCounterCtx.Provider>
  );
};

export default IncrementingCounterContext;
