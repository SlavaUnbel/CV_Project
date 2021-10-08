import React, { FC } from 'react';
import { useFetchDadJokesData, useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './dad-jokes.scss';

interface Props extends IWithLoading, IWithError {
  dadJokesData: IDadJokes;
  setDadJokesData: (data: IDadJokes) => void;
}

const DadJokes: FC<Props> = ({
  dadJokesData,
  setDadJokesData,

  loading,
  setLoading,

  pushError,
}) => {
  useWindowTitle('Dad Jokes');

  const getJoke = useFetchDadJokesData({
    setDadJokesData,
    setLoading,
    pushError,
  });

  return (
    <ComponentWrapper>
      <div className="dad-jokes__container">
        <div className="dad-jokes__wrapper">
          <h3>Don't Laugh Challenge</h3>

          <div className="joke">
            {!loading ? dadJokesData.joke : 'Loading...'}
          </div>

          <button onClick={getJoke}>Get Another Joke</button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DadJokes;
