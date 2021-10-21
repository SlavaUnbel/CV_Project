import React, { FC } from 'react';

interface Props {
  cup: number;
  fillCup: (cup: number) => void;
}

const Cups: FC<Props> = ({ cup, fillCup }) => (
  <div className="cup cup-small" onClick={() => fillCup(cup)}>
    250 ml
  </div>
);

export default Cups;
