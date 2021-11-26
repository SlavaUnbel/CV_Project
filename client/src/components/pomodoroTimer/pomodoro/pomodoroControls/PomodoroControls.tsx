import React, { FC, useContext } from 'react';

import { PomodoroTimerCtx } from '../../../../utils/context';
import AudioPlayerBtn from './audioPlayerBtn/AudioPlayerBtn';
import BackToSettingsBtn from './backToSettingsBtn/BackToSettingsBtn';
import PlayPauseBtn from './playPauseBtn/PlayPauseBtn';

const PomodoroControls: FC = () => {
  const { playerOpened } = useContext(PomodoroTimerCtx);

  return (
    <div className={`button-wrapper ${playerOpened ? "opened" : ""}`}>
      <BackToSettingsBtn />

      <PlayPauseBtn />

      <AudioPlayerBtn />
    </div>
  );
};

export default PomodoroControls;
