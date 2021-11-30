import './expanding-cards.scss';

import React, { FC, useContext } from 'react';

import { ExpandingCardsCtx } from '../../../utils/context';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import ExpandingCard from './expandingCard/ExpandingCard';

const ExpandingCards: FC = () => {
  const { data } = useContext(ExpandingCardsCtx);

  return (
    <ComponentWrapper>
      <LoaderWrapper>
        <div className="expanding-cards__container">
          {data.map((card, idx) => (
            <ExpandingCard key={card._id} card={card} idx={idx} />
          ))}
        </div>
      </LoaderWrapper>
    </ComponentWrapper>
  );
};

export default ExpandingCards;
