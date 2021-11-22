import React, { FC, useContext } from 'react';
import { AudioPlayerCtx } from '../../../utils/context';
import './audio-player.scss';
import AudioPlayerControls from './audioPlayerControlls/AudioPlayerControls';
import AudioPlayerWaveDuration from './audioPlayerWaveDuration/AudioPlayerWaveDuration';

const AudioPlayer: FC = () => {
  const { wavesurferContainer } = useContext(AudioPlayerCtx);

  return (
    <div className="audio-player__wrapper">
      <div ref={wavesurferContainer} />

      <AudioPlayerWaveDuration />

      <AudioPlayerControls />
    </div>
  );
};
export default AudioPlayer;
