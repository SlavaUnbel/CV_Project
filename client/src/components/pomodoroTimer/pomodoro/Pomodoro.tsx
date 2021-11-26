import React, { FC, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AudioPlayerContainer from '../../../containers/audioPlayer/AudioPlayerContainer';
import { audioPlayerActions } from '../../../reducers/audioPlayerReducer';
import { services } from '../../../services/services';
import { PomodoroTimerCtx } from '../../../utils/context';
import { SECOND } from '../../../utils/date';
import ToastContainer from '../../utils/toastContainer/ToastContainer';
import Countdown from './countdown/Countdown';
import PomodoroControls from './pomodoroControls/PomodoroControls';
import TimerLabel from './timerLabel/TimerLabel';

const Pomodoro: FC = () => {
  const { playerOpened, countdown, setAudio, setAudioList, pushError } =
    useContext(PomodoroTimerCtx);
  const dispatch = useDispatch();

  useEffect(() => {
    services.pomodoroTimerService
      .getMusicList()
      .then((data) => {
        setAudioList(data);
        setAudio(data[Math.floor(Math.random() * data.length)]);
      })
      .catch((e) => pushError(e));
  }, [setAudio, setAudioList, pushError]);

  useEffect(() => {
    const timeout = window.setTimeout(
      () => dispatch(audioPlayerActions.isPlaying.pause()),
      SECOND * 1.2
    );

    return () => window.clearTimeout(timeout);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <ul className="labels">
        <TimerLabel label="work" title="Work" />

        <TimerLabel label="short" title="Short Break" />

        <TimerLabel label="long" title="Long Break" />
      </ul>

      <Countdown>{countdown}</Countdown>

      <PomodoroControls />

      <div className={`audio-player-wrapper ${playerOpened ? "opened" : ""}`}>
        <AudioPlayerContainer />
      </div>

      <ToastContainer autoClose={false} limit={1} position="bottom-center" />
    </>
  );
};

export default Pomodoro;
