import React, { FC } from 'react';
import { useEstimateRemainedWater, useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Cups from './cups/Cups';
import './drink-water.scss';

const DrinkWater: FC = () => {
  useWindowTitle('Drink Water');

  const { refs, fillCup } = useEstimateRemainedWater();

  return (
    <ComponentWrapper>
      <div className="drink-water__container">
        <h1>Drink Water</h1>

        <h3>Goal: 2 Liters</h3>

        <div className="cup">
          <div className="remained" ref={refs.remainedRef}>
            <span ref={refs.litersRef}>2L</span>
            <small>Remained</small>
          </div>

          <div className="percentage" ref={refs.percentageRef} />
        </div>

        <p className="text">Select how many glasses of water you have drunk</p>

        <div className="cups" ref={refs.cupRef}>
          {Array.from({ length: 8 }, (_, idx) => idx).map((cup) => (
            <Cups key={cup} cup={cup} fillCup={fillCup} />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DrinkWater;
