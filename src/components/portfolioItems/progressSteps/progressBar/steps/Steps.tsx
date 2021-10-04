import React, { FC } from 'react';

interface Props {
  circle: number;
}

const Steps: FC<Props> = ({ circle }) => (
  <div className={`circle${circle === 1 ? ' active' : ''}`}>{circle}</div>
);

export default Steps;
