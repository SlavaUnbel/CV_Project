import React, { FC, LegacyRef, useRef } from 'react';
import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Cups from './cups/Cups';
import './drink-water.scss';

const DrinkWater: FC = () => {
  useWindowTitle('Drink Water');

  const litersRef: LegacyRef<HTMLSpanElement> = useRef(null);
  const remainedRef: LegacyRef<HTMLDivElement> = useRef(null);
  const percentageRef: LegacyRef<HTMLDivElement> = useRef(null);

  return (
    <ComponentWrapper>
      <div className="drink-water__container">
        <h1>Drink Water</h1>

        <h3>Goal: 2 Liters</h3>

        <div className="cup">
          <div className="remained" ref={remainedRef}>
            <span ref={litersRef}>2L</span>
            <small>Remained</small>
          </div>

          <div className="percentage" ref={percentageRef} />
        </div>

        <p className="text">Select how many glasses of water you have drunk</p>

        <div className="cups">
          {new Array(8).fill(1).map((_, idx) => (
            <Cups
              key={idx}
              idx={idx}
              percentageRef={percentageRef}
              remainedRef={remainedRef}
              litersRef={litersRef}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DrinkWater;
