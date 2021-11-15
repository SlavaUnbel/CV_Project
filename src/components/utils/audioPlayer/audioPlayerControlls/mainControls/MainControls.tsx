import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  SkipNext,
  SkipPrevious,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { FC, useContext } from 'react';
import { AudioPlayerCtx } from '../../../../../utils/context';

const MainControls: FC = () => {
  const {
    isPlaying,
    play,
    pause,
    skipPrevious,
    seekBack,
    seekForward,
    skipNext,
  } = useContext(AudioPlayerCtx);

  return (
    <div className="controls-wrapper">
      <IconButton onClick={skipPrevious} className="icon-btn">
        <SkipPrevious />
      </IconButton>

      <IconButton onClick={seekBack} className="icon-btn">
        <FastRewind />
      </IconButton>

      <IconButton onClick={isPlaying ? pause : play} className="icon-btn">
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>

      <IconButton onClick={seekForward} className="icon-btn">
        <FastForward />
      </IconButton>

      <IconButton onClick={skipNext} className="icon-btn">
        <SkipNext />
      </IconButton>
    </div>
  );
};

export default MainControls;
