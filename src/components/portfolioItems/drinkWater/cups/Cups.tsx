import React, { FC, RefObject } from 'react';
import { useEstimateRemainedWater } from '../../../../utils/hooks';

interface Props {
  idx: number;
  percentageRef: RefObject<HTMLDivElement>;
  remainedRef: RefObject<HTMLDivElement>;
  litersRef: RefObject<HTMLSpanElement>;
}

const Cups: FC<Props> = ({ idx, percentageRef, remainedRef, litersRef }) => {
  const { cupRef, fillCup } = useEstimateRemainedWater({
    percentageRef,
    remainedRef,
    litersRef,
  });

  return (
    <div className="cup cup-small" ref={cupRef} onClick={() => fillCup(idx)}>
      250 ml
    </div>
  );
};

export default Cups;
