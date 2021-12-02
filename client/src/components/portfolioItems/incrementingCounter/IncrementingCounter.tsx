import './incrementing-counter.scss';

import React, { FC } from 'react';

import { getIncrementingCounterItemsInfo } from '../../../services/databaseMethods';
import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import CounterItem from './counterItem/CounterItem';

const IncrementingCounter: FC = () => {
  useWindowTitle("Incrementing Counter");

  const data = getIncrementingCounterItemsInfo();
  const { twitter, youtube, facebook } = data;

  return (
    <ComponentWrapper>
      <div className="incrementing-counter__container">
        <CounterItem item={twitter} />

        <CounterItem item={youtube} />

        <CounterItem item={facebook} />
      </div>
    </ComponentWrapper>
  );
};

export default IncrementingCounter;
