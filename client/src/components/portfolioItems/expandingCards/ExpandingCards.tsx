import './expanding-cards.scss';

import React, { FC, useEffect } from 'react';

import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import ExpandingCard from './expandingCard/ExpandingCard';

interface Props {
  data: IExpandingCards[];
  getData: () => void;
}

const ExpandingCards: FC<Props> = ({ data, getData }) => {
  useWindowTitle("Expanding Cards");

  useEffect(() => getData(), [getData]);

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
