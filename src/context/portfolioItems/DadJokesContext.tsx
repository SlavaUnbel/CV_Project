import React, { FC } from 'react';
import DadJokes from '../../components/portfolioItems/dadJokes/DadJokes';
import { DadJokesCtx } from '../../utils/context';
import { useFetchDadJokesData, useWindowTitle } from '../../utils/hooks';

interface Props extends IWithLoading, IWithError {
  data: IDadJokes;
  setData: (data: IDadJokes) => void;
}

const DadJokesContext: FC<Props> = ({
  data,
  setData,
  setLoading,

  pushError,
}) => {
  useWindowTitle('Dad Jokes');

  const getJoke = useFetchDadJokesData({
    setData,
    setLoading,
    pushError,
  });

  return (
    <DadJokesCtx.Provider
      value={{
        data,
        setData,
        setLoading,

        pushError,

        getJoke,
      }}
    >
      <DadJokes />
    </DadJokesCtx.Provider>
  );
};

export default DadJokesContext;
