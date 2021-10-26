import React, { FC } from 'react';
import DrinkWater from '../../components/portfolioItems/drinkWater/DrinkWater';
import { DrinkWaterCtx } from '../../utils/context';
import { useEstimateRemainedWater, useWindowTitle } from '../../utils/hooks';

const DrinkWaterContext: FC = () => {
  useWindowTitle('Drink Water');

  const { litersRef, remainedRef, percentageRef, cupRef, fillCup } =
    useEstimateRemainedWater();

  return (
    <DrinkWaterCtx.Provider
      value={{ litersRef, remainedRef, percentageRef, cupRef, fillCup }}
    >
      <DrinkWater />
    </DrinkWaterCtx.Provider>
  );
};

export default DrinkWaterContext;
