import { ArrowBack, Pause, PlayArrow } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { FC, useContext } from 'react';
import { PomodoroTimerCtx } from '../../../../../utils/context';

const PomodoroControls: FC = () => {
  const {
    startAnimate,
    opened,
    executing,
    timerDisabled,
    setOpened,
    settingBtn,
    startTimer,
    pauseTimer,
  } = useContext(PomodoroTimerCtx);

  return (
    <div className="button-wrapper">
      <Tooltip title="Back to timer settings" placement="right">
        <IconButton className="icon-btn back-icon" onClick={settingBtn}>
          <ArrowBack />
        </IconButton>
      </Tooltip>

      <IconButton
        className="icon-btn"
        onClick={!startAnimate ? startTimer : pauseTimer}
        disabled={timerDisabled}
      >
        {!startAnimate ? <PlayArrow /> : <Pause />}
      </IconButton>

      <Tooltip
        title={`${
          executing.active !== 'work'
            ? ''
            : `${!opened ? 'Expand' : 'Hide'} audio player`
        }`}
        placement="left"
      >
        <span>
          <IconButton
            className={`icon-btn audio-icon ${opened ? 'opened' : ''}`}
            onClick={() => setOpened(!opened)}
            disabled={executing.active !== 'work'}
          />
        </span>
      </Tooltip>
    </div>
  );
};

export default PomodoroControls;
