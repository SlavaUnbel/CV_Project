import React, { FC } from 'react';
import { arrowSrc } from '../../../utils/constants';

interface Props {
  direction: SliderDirection;
  disabled: boolean;
  changeCurrent: () => void;
}

const Arrow: FC<Props> = ({ direction, disabled, changeCurrent }) => (
  <img
    src={arrowSrc.replace('arrow', `${direction}-arrow`)}
    className={`arrow ${direction} ${disabled ? 'disabled' : ''}`}
    alt=""
    onClick={() => {
      if (disabled) return;
      changeCurrent();
    }}
  />
);

export default Arrow;
