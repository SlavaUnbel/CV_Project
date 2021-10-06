import React, { FC } from 'react';
import {
  useFetchExpandingCardsData,
  useWindowTitle,
} from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Loader from '../../utils/loader/Loader';
import './expanding-cards.scss';
import ExpandingCard from './expandingCard/ExpandingCard';

interface Props extends IWithLoading, IWithError, IWithWarning {
  expandingCardsData: IExpandingCards[];
  setExpandingCardsData: (data: IExpandingCards[]) => void;
}

const ExpandingCards: FC<Props> = ({
  expandingCardsData,
  setExpandingCardsData,

  loading,
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
      {!loading ? (
        <div className="expanding-cards__container">
          {expandingCardsData.map((card) => (
            <ExpandingCard key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </ComponentWrapper>
  );
};

export default ExpandingCards;
