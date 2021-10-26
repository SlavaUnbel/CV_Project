import React, { FC, useContext } from 'react';
import { DadJokesCtx } from '../../../utils/context';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './dad-jokes.scss';
import JokeWrapper from './jokeWrapper/JokeWrapper';

const DadJokes: FC = () => {
  const { data, getJoke } = useContext(DadJokesCtx);

  return (
    <ComponentWrapper>
      <div className="dad-jokes__container">
        <div className="dad-jokes__wrapper">
          <h3>Don't Laugh Challenge</h3>

          <JokeWrapper>
            {(data && data.joke) || '<-- Joke goes here -->'}
          </JokeWrapper>

          <Button onClick={getJoke}>Get Another Joke</Button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DadJokes;
