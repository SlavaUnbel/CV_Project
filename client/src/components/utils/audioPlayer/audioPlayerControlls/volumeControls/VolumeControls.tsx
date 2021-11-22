import { VolumeOff, VolumeUp } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { FC, useContext } from 'react';
import { AudioPlayerCtx } from '../../../../../utils/context';

const VolumeControls: FC = () => {
  const { volume, changeVolume, changeMute } = useContext(AudioPlayerCtx);

  return (
    <div className="volume-wrapper">
      <Tooltip title={`${volume === 0 ? 'Unmute' : 'Mute'}`}>
        <IconButton onClick={changeMute} className="icon-btn">
          {volume === 0 ? <VolumeOff /> : <VolumeUp />}
        </IconButton>
      </Tooltip>

      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => changeVolume(+e.currentTarget.value)}
      />
    </div>
  );
};

export default VolumeControls;
