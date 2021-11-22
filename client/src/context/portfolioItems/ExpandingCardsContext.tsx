import React, { FC } from 'react';
import ExpandingCards from '../../components/portfolioItems/expandingCards/ExpandingCards';
import { ExpandingCardsCtx, IExpandingCardsContext } from '../../utils/context';
import { useFetchExpandingCardsData, useWindowTitle } from '../../utils/hooks';

const ExpandingCardsContext: FC<IExpandingCardsContext> = ({
  data,
  setData,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Expanding Cards');

  useFetchExpandingCardsData({
    setData,
    setLoading,
    pushError,
    pushWarning,
  });

  return (
    <ExpandingCardsCtx.Provider
      value={{
        data,
        setData,
        setLoading,

        pushError,
        pushWarning,
      }}
    >
      <ExpandingCards />
    </ExpandingCardsCtx.Provider>
  );
};

export default ExpandingCardsContext;
