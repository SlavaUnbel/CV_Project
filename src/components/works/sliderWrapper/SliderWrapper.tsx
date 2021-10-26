import React, { FC, useContext } from 'react';
import { WorksCtx } from '../../../utils/context';

const SliderWrapper: FC = (props) => {
  const { current } = useContext(WorksCtx);

  return (
    <div
      className="slider"
      style={{ transform: `translateX(-${current * 100}vw)` }}
    >
      {props.children}
    </div>
  );
};

export default SliderWrapper;
