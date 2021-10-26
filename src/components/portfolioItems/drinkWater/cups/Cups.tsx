import React, { FC, useContext } from 'react';
import { DrinkWaterCtx } from '../../../../utils/context';

interface Props {
  cup: number;
}

const Cups: FC<Props> = ({ cup }) => {
  const { fillCup } = useContext(DrinkWaterCtx);

  return (
    <div className="cup cup-small" onClick={() => fillCup(cup)}>
      250 ml
    </div>
  );
};

export default Cups;
