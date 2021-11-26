import { Audiotrack } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { FC, useContext } from 'react';

import { PomodoroTimerCtx } from '../../../../../utils/context';

const AudioPlayerBtn: FC = () => {
  const { executing, timerDisabled, playerOpened, isPlaying, setPlayerOpened } =
    useContext(PomodoroTimerCtx);

  return (
    <Tooltip
      title={`${
        executing.active !== "work" || timerDisabled
          ? "Audio player is disabled, please, take a rest"
          : `${!playerOpened ? "Expand" : "Hide"} audio player`
      }`}
      placement="left"
    >
      <span>
        <IconButton
          className="icon-btn"
          onClick={() => setPlayerOpened(!playerOpened)}
          disabled={executing.active !== "work" || timerDisabled}
        >
          <Audiotrack className={`audio-icon ${isPlaying ? "playing" : ""}`} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default AudioPlayerBtn;
