import React, { FC, useContext } from 'react';
import { IntcrementingCounterCtx } from '../../../utils/context';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import CounterItem from './counterItem/CounterItem';
import './incrementing-counter.scss';

const IncrementingCounter: FC = () => {
  const { data } = useContext(IntcrementingCounterCtx);
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
