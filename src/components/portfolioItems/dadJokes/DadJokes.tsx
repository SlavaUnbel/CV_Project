import React, { FC } from 'react';
import { useFetchDadJokesData, useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Loader from '../../utils/loader/Loader';
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

          {!loading ? (
            <div className="joke">
              {dadJokesData.joke || '<-- Joke goes here -->'}
            </div>
          ) : (
            <Loader
              wrapperStyle={{ height: '15vh', width: '100%', margin: 'auto' }}
              circleStyle={{
                height: '3.5rem',
                width: '3.5rem',
                borderWidth: '0.5rem',
              }}
            />
          )}

          <button onClick={getJoke}>Get Another Joke</button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DadJokes;
