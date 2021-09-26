import React, { FC } from 'react';
import { arrowSrc } from '../../../utils/constants';

interface Props {
  direction: SliderDirection;
  disabled: boolean;
  onClick: (direction: SliderDirection) => void;
}

const Arrow: FC<Props> = ({ direction, disabled, onClick }) => (
  <img
    src={arrowSrc}
    className={`arrow ${direction} ${disabled ? 'disabled' : ''}`}
    alt=""
    onClick={() => {
      if (disabled) return;
      onClick(direction);
    }}
  />
);

export default Arrow;
