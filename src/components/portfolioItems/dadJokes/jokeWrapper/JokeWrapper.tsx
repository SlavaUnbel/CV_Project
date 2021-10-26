import React, { FC } from 'react';
import LoaderWrapper from '../../../utils/loaderWrapper/LoaderWrapper';

const JokeWrapper: FC = (props) => (
  <LoaderWrapper
    wrapperStyle={{ height: '14.5vh', width: '100%', margin: 'auto' }}
    circleStyle={{
      height: '3.5rem',
      width: '3.5rem',
      borderWidth: '0.5rem',
    }}
  >
    <div className="joke">{props.children}</div>
  </LoaderWrapper>
);

export default JokeWrapper;
