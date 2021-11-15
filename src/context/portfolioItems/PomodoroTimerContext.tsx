import React, { FC, FormEvent, useState } from 'react';
import { TimeProps } from 'react-countdown-circle-timer';
import PomodoroTimer from '../../components/portfolioItems/pomodoroTimer/PomodoroTimer';
import { PomodoroTimerCtx } from '../../utils/context';
import { getDateValueWithZeros } from '../../utils/date';
import { useWindowTitle } from '../../utils/hooks';

interface Props extends IWithLoading, IWithError, IWithWarning, IWithSuccess {
  audio: string | null;
  setAudio: (audio: string | null) => void;
  audioList: string[];
  setAudioList: (list: string[]) => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
}

const PomodoroTimerContext: FC<Props> = ({
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

  const [pomodoro, setPomodoro] = useState(0);
  const [newTimer, setNewTimer] = useState<IPomodoroTimer>({
    work: 0.2,
    short: 0.3,
    long: 0.5,
    active: 'work',
  });
  const [executing, setExecuting] = useState<IPomodoroTimer>(
    {} as IPomodoroTimer,
  );
  const [startAnimate, setStartAnimate] = useState(false);
  const [timerDisabled, setTimerDisabled] = useState(false);
  const [opened, setOpened] = useState(false);

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
    stop();
  };

  const settingBtn = () => {
    setExecuting({} as IPomodoroTimer);
    setPomodoro(0);
  };

  const updateExecute = (updatedSettings: IPomodoroTimer) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setCurrentTimer = (activeState: string) => {
    updateExecute({ ...executing, active: activeState });
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

  const handleSubmit = (e?: FormEvent<HTMLButtonElement>) => {
    e && e.preventDefault();

    !Object.values(newTimer).includes(0)
      ? updateExecute(newTimer)
      : pushWarning(
          'Please, set all timers to value between 1 second and 1 hour',
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
        executing,
        startAnimate,
        timerDisabled,
        setTimerDisabled,
        startTimer,
        pauseTimer,
        stopTimer,
        settingBtn,
        setNewTimer,
        setCurrentTimer,
        updateExecute,
        handleSubmit,
        countdown,

        opened,
        setOpened,

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
