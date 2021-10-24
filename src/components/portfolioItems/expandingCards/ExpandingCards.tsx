import React, { FC } from 'react';
import {
  useFetchExpandingCardsData,
  useWindowTitle,
} from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import './expanding-cards.scss';
import ExpandingCard from './expandingCard/ExpandingCard';

interface Props extends IWithLoading, IWithError, IWithWarning {
  data: IExpandingCards[];
  setExpandingCardsData: (data: IExpandingCards[]) => void;
}

const ExpandingCards: FC<Props> = ({
  data,
  setExpandingCardsData,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Expanding Cards');

  useFetchExpandingCardsData({
    setExpandingCardsData,
    setLoading,
    pushError,
    pushWarning,
  });

  return (
    <ComponentWrapper>
      <LoaderWrapper>
        <div className="expanding-cards__container">
          {data.map((card) => (
            <ExpandingCard key={card.id} card={card} />
          ))}
        </div>
      </LoaderWrapper>
    </ComponentWrapper>
  );
};

export default ExpandingCards;
