import React, { FC } from 'react';

import { useExpandingCardRef } from '../../../../utils/hooks';

interface Props {
  card: IExpandingCards;
  idx: number;
}

const ExpandingCard: FC<Props> = ({ card, idx }) => {
  const { ref, handleClick } = useExpandingCardRef();

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`panel ${idx === 0 ? "active" : ""}`}
      style={{ backgroundImage: `url(${card.image})` }}
    >
      <h3>{card.title}</h3>
    </div>
  );
};

export default ExpandingCard;
