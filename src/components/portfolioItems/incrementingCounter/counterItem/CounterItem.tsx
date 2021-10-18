import React, { FC } from 'react';
import { useIncrementingCounter } from '../../../../utils/hooks';

interface Props {
  icon: JSX.Element;
  dataTarget: number;
  title: string;
}

const CounterItem: FC<Props> = ({ icon, dataTarget, title }) => {
  const ref = useIncrementingCounter();

  return (
    <div className="counter-container">
      {icon}

      <div className="counter" data-target={dataTarget.toString()} ref={ref} />

      <span>{title}</span>
    </div>
  );
};

export default CounterItem;
