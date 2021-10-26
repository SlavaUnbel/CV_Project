import React, { FC, useContext } from 'react';
import { DrinkWaterCtx } from '../../../utils/context';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Cups from './cups/Cups';
import './drink-water.scss';

const DrinkWater: FC = () => {
  const { litersRef, remainedRef, percentageRef, cupRef } =
    useContext(DrinkWaterCtx);

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

        <div className="cups" ref={cupRef}>
          {Array.from({ length: 8 }, (_, idx) => idx).map((cup) => (
            <Cups key={cup} cup={cup} />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DrinkWater;
