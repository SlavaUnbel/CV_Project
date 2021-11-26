import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { FC, useContext } from 'react';

import { PomodoroTimerCtx } from '../../../../../utils/context';

const PlayPauseBtn: FC = () => {
  const { startAnimate, timerDisabled, startTimer, pauseTimer } =
    useContext(PomodoroTimerCtx);

  return (
    <IconButton
      className="icon-btn"
      onClick={!startAnimate ? startTimer : pauseTimer}
      disabled={timerDisabled}
    >
      {!startAnimate ? <PlayArrow /> : <Pause />}
    </IconButton>
  );
};

export default PlayPauseBtn;
