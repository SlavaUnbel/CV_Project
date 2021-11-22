import React, { FC, useContext } from 'react';
import { AudioPlayerCtx } from '../../../../utils/context';

const AudioPlayerWaveDuration: FC = () => {
  const { currentTime, duration, presentSeconds } = useContext(AudioPlayerCtx);

  return (
    <div className="duration">
      {presentSeconds(currentTime)} - {presentSeconds(duration)}
    </div>
  );
};

export default AudioPlayerWaveDuration;
