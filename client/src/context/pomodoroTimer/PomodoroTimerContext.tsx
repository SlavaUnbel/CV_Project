import React, { FC } from 'react';

import PomodoroTimer from '../../components/pomodoroTimer/PomodoroTimer';
import { PomodoroTimerCtx } from '../../utils/context';
import { useManageTimer, useStartPauseStopTimer, useWindowTitle } from '../../utils/hooks';

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
  isPlaying: boolean;
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
  isPlaying,
  play,
  pause,
  stop,

  pushError,
  pushWarning,
  pushSuccess,
}) => {
  useWindowTitle("Pomodoro Timer");

  const { startTimer, pauseTimer, stopTimer } = useStartPauseStopTimer({
    executing,
    setStartAnimate,
    setTimerDisabled,
    setPlayerOpened,
    play,
    pause,
    stop,
  });

  const {
    settingBtn,
    setCurrentTimer,
    updateExecute,
    changeTimer,
    handleSubmit,
    countdown,
  } = useManageTimer({
    executing,
    newTimer,
    setStartAnimate,
    setTimerDisabled,
    setPlayerOpened,
    setExecuting,
    setPomodoro,
    stopTimer,
    stop,
    pushWarning,
  });

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
        isPlaying,

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
