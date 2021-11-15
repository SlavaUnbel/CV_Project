import React, { FC, useContext, useEffect } from 'react';
import AudioPlayerContainer from '../../../../containers/audioPlayer/AudioPlayerContainer';
import { services } from '../../../../services/services';
import { PomodoroTimerCtx } from '../../../../utils/context';
import Countdown from './countdown/Countdown';
import PomodoroControls from './pomodoroControls/PomodoroControls';
import TimerLabel from './timerLabel/TimerLabel';

const Pomodoro: FC = () => {
  const { opened, countdown, setAudio, setAudioList, pushError } =
    useContext(PomodoroTimerCtx);

  useEffect(() => {
    services.pomodoroTimerService
      .getMusicList()
      .then((data) => {
        setAudioList(data);
        setAudio(data[Math.floor(Math.random() * data.length)]);
      })
      .catch((e) => pushError(e));
  }, [setAudio, setAudioList, pushError]);

  return (
    <>
      <ul className="labels">
        <TimerLabel label="work" title="Work" />

        <TimerLabel label="short" title="Short Break" />

        <TimerLabel label="long" title="Long Break" />
      </ul>

      <Countdown>{countdown}</Countdown>

      <PomodoroControls />

      <div className={`audio-player-wrapper ${opened ? 'opened' : ''}`}>
        <AudioPlayerContainer />
      </div>
    </>
  );
};

export default Pomodoro;
