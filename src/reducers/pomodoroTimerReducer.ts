import { createSymbiote } from 'redux-symbiote';

export interface PomodoroTimerState {
  pomodoro: number;
  newTimer: IPomodoroTimer;
  executing: IPomodoroTimer;
  startAnimate: boolean;
  timerDisabled: boolean;
  playerOpened: boolean;
}

export const initialPomodoroSettings: IPomodoroTimer = {
  work: 0,
  short: 5.5,
  long: 45,
  active: 'work',
};

const initialPomodoroTimerState: PomodoroTimerState = {
  pomodoro: 0,
  newTimer: initialPomodoroSettings,
  executing: initialPomodoroSettings,
  startAnimate: false,
  timerDisabled: false,
  playerOpened: false,
};

const symbiotes = {
  pomodoro: {
    set: (state: PomodoroTimerState, pomodoro: number) => ({
      ...state,
      pomodoro,
    }),
  },
  timer: {
    new: (state: PomodoroTimerState, newTimer: IPomodoroTimer) => ({
      ...state,
      newTimer
    }),
    execute: (state: PomodoroTimerState, executing: IPomodoroTimer) => ({
      ...state,
      executing
    })
  },
  animate: {
    set: (state: PomodoroTimerState, startAnimate: boolean) => ({
      ...state, startAnimate
    }),
  },
  timerDisabled: {
    set: (state: PomodoroTimerState, timerDisabled: boolean) => ({
      ...state, timerDisabled
    }),
  },
  playerOpened: {
    set: (state: PomodoroTimerState, playerOpened: boolean) => ({
      ...state, playerOpened
    }),
  },
};

export const { actions: pomodoroTimerActions, reducer: pomodoroTimerReducer } =
  createSymbiote(initialPomodoroTimerState, symbiotes);
