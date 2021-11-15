import { Speed } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { FC, useContext } from 'react';
import { AudioPlayerCtx } from '../../../../../utils/context';

const SpeedControls: FC = () => {
  const { playbackRate, changePlaybackRate, play, pause } =
    useContext(AudioPlayerCtx);

  return (
    <div className="speed-wrapper">
      <input
        type="range"
        min={0.01}
        max={2}
        step={0.01}
        value={playbackRate}
        onChange={(e) => changePlaybackRate(+e.currentTarget.value)}
        onMouseDown={pause}
        onMouseUp={play}
      />

      <Tooltip title="Turn playback rate to 1">
        <IconButton onClick={() => changePlaybackRate(1)} className="icon-btn">
          <Speed />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default SpeedControls;
