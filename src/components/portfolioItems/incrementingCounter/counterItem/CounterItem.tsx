import React, { FC } from 'react';
import { useIncrementingCounter } from '../../../../utils/hooks';

interface Props {
  item: IIncrementingCounterItem;
}

const CounterItem: FC<Props> = ({ item }) => {
  const ref = useIncrementingCounter();

  return (
    <div className="counter-container">
      {item.icon}

      <div className="counter" data-target={item.dataTarget} ref={ref} />

      <span>{item.title}</span>
    </div>
  );
};

export default CounterItem;
