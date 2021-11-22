import React, { FC, FormEvent } from 'react';
import { TimeProps } from 'react-countdown-circle-timer';
import PomodoroTimer from '../../components/pomodoroTimer/PomodoroTimer';
import { initialPomodoroSettings } from '../../reducers/pomodoroTimerReducer';
import { PomodoroTimerCtx } from '../../utils/context';
import { getDateValueWithZeros } from '../../utils/date';
import { useWindowTitle } from '../../utils/hooks';

interface Props extends IWithError, IWithWarning, IWithSuccess {
  pomodoro: number;
  setPomodoro: (pomodoro: number) => void;

  newTimer: IPomodoroTimer;
  setNewTimer: (timer: IPomodoroTimer) => void;
  executing: IPomodoroTimer;
  setExecuting: (timer: IPomodoroTimer) => void;

  startAnimate: boolean;
  setStartAnimate: (animate: boolean) => void;

  timerDisabled: boolean;
  setTimerDisabled: (disabled: boolean) => void;

  playerOpened: boolean;
  setPlayerOpened: (opened: boolean) => void;

  audio: string | null;
  setAudio: (audio: string | null) => void;
  audioList: string[];
  setAudioList: (list: string[]) => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
}

const PomodoroTimerContext: FC<Props> = ({
  pomodoro,
  setPomodoro,

  newTimer,
  setNewTimer,
  executing,
  setExecuting,

  startAnimate,
  setStartAnimate,

  timerDisabled,
  setTimerDisabled,

  playerOpened,
  setPlayerOpened,

  audio,
  setAudio,
  audioList,
  setAudioList,
  play,
  pause,
  stop,

  pushError,
  pushWarning,
  pushSuccess,
}) => {
  useWindowTitle('Pomodoro Timer');

  const startTimer = () => {
    setStartAnimate(true);
    executing.active === 'work' && play();
  };

  const pauseTimer = () => {
    setStartAnimate(false);
    executing.active === 'work' && pause();
  };

  const stopTimer = () => {
    setStartAnimate(false);
    setTimerDisabled(true);
    setPlayerOpened(false);
    stop();
  };

  const settingBtn = () => {
    setStartAnimate(false);
    setTimerDisabled(false);
    setPlayerOpened(false);
    stop();
    setExecuting(initialPomodoroSettings);
    setPomodoro(0);
  };

  const updateExecute = (updatedSettings: IPomodoroTimer) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setCurrentTimer = (active: string) => {
    updateExecute({ ...executing, active });
    setTimerTime(executing);
  };

  const setTimerTime = (evaluate: IPomodoroTimer) => {
    switch (evaluate.active) {
      case 'work':
        setPomodoro(evaluate.work);
        break;

      case 'short':
        setPomodoro(evaluate.short);
        break;

      case 'long':
        setPomodoro(evaluate.long);
        break;

      default:
        setPomodoro(0);
        break;
    }
  };

  const changeTimer = (label: string) => {
    stopTimer();
    setCurrentTimer(label);
    if (executing.active !== label) {
      const toast = document.querySelector('.Toastify__toast-container')
        ?.children[0];
      //@ts-ignore
      toast && toast.click();
      setPlayerOpened(false);
      setTimerDisabled(false);
    }
  };

  const handleSubmit = (e?: FormEvent<HTMLButtonElement>) => {
    e && e.preventDefault();

    !Object.values(newTimer).includes(0)
      ? updateExecute(newTimer)
      : pushWarning(
          'Please, set all timers to values between 1 second and 1 hour',
        );
  };

  const countdown = ({ remainingTime }: TimeProps) => {
    if (!remainingTime) return '00:00';

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${getDateValueWithZeros(minutes)}:${getDateValueWithZeros(
      seconds,
    )}`;
  };

  return (
    <PomodoroTimerCtx.Provider
      value={{
        pomodoro,

        newTimer,
        setNewTimer,
        handleSubmit,

        executing,
        updateExecute,

        timerDisabled,
        setTimerDisabled,

        startAnimate,
        startTimer,
        pauseTimer,
        stopTimer,

        setCurrentTimer,
        settingBtn,
        changeTimer,

        countdown,

        playerOpened,
        setPlayerOpened,

        audio,
        setAudio,
        audioList,
        setAudioList,

        pushError,
        pushWarning,
        pushSuccess,
      }}
    >
      <PomodoroTimer />
    </PomodoroTimerCtx.Provider>
  );
};

export default PomodoroTimerContext;
