import './dad-jokes.scss';

import React, { FC, useEffect } from 'react';

import { useWindowTitle } from '../../../utils/hooks';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import JokeWrapper from './jokeWrapper/JokeWrapper';

interface Props {
  data: IDadJokes;
  getData: () => void;
}

const DadJokes: FC<Props> = ({ data, getData }) => {
  useWindowTitle("Dad Jokes");

  useEffect(
    () => getData(),
    //eslint-disable-next-line
    []
  );

  return (
    <ComponentWrapper>
      <div className="dad-jokes__container">
        <div className="dad-jokes__wrapper">
          <h3>Don't Laugh Challenge</h3>

          <JokeWrapper>
            {(data && data.joke) || "<-- Joke goes here -->"}
          </JokeWrapper>

          <Button onClick={getData}>Get Another Joke</Button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DadJokes;
