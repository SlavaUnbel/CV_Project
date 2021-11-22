import React, { FC } from 'react';
import { expandingCardsSrc } from '../../../../utils/constants';
import { useExpandingCardRef } from '../../../../utils/hooks';

interface Props {
  card: IExpandingCards;
}

const ExpandingCard: FC<Props> = ({ card }) => {
  const { ref, handleClick } = useExpandingCardRef();

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`panel${card.id === 1 ? ' active' : ''}`}
      style={{
        backgroundImage: `url(${expandingCardsSrc}/image-${card.id}.jpeg)`,
      }}
    >
      <h3>{card.title}</h3>
    </div>
  );
};

export default ExpandingCard;
