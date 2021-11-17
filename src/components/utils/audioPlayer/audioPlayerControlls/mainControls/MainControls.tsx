import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  Repeat,
  RepeatOne,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { FC, useContext } from 'react';
import { AudioPlayerCtx } from '../../../../../utils/context';

const MainControls: FC = () => {
  const {
    isPlaying,
    repeat,
    setRepeat,
    play,
    pause,
    skipPrevious,
    seekBack,
    seekForward,
    skipNext,
  } = useContext(AudioPlayerCtx);

  return (
    <div className="controls-wrapper">
      <IconButton
        onClick={() => {}}
        className={`icon-btn shuffle ${false ? 'icon-on' : ''}`}
      >
        <Shuffle />
      </IconButton>

      <IconButton onClick={skipPrevious} className="icon-btn skip-prev">
        <SkipPrevious />
      </IconButton>

      <IconButton onClick={seekBack} className="icon-btn back">
        <FastRewind />
      </IconButton>

      <IconButton
        onClick={isPlaying ? pause : play}
        className="icon-btn play-pause"
      >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>

      <IconButton onClick={seekForward} className="icon-btn forward">
        <FastForward />
      </IconButton>

      <IconButton onClick={skipNext} className="icon-btn skip-next">
        <SkipNext />
      </IconButton>

      <IconButton
        onClick={() => setRepeat && setRepeat(!repeat)}
        className={`icon-btn repeat ${repeat ? 'icon-on' : ''}`}
      >
        {repeat ? <RepeatOne /> : <Repeat />}
      </IconButton>
    </div>
  );
};

export default MainControls;
