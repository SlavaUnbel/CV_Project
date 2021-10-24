import React, { FC } from 'react';
import { useFetchDadJokesData, useWindowTitle } from '../../../utils/hooks';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import './dad-jokes.scss';

interface Props extends IWithLoading, IWithError {
  data: IDadJokes;
  setDadJokesData: (data: IDadJokes) => void;
}

const DadJokes: FC<Props> = ({
  data,
  setDadJokesData,
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

          <LoaderWrapper
            wrapperStyle={{ height: '14.5vh', width: '100%', margin: 'auto' }}
            circleStyle={{
              height: '3.5rem',
              width: '3.5rem',
              borderWidth: '0.5rem',
            }}
          >
            <div className="joke">{data.joke || '<-- Joke goes here -->'}</div>
          </LoaderWrapper>

          <Button onClick={getJoke}>Get Another Joke</Button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DadJokes;
