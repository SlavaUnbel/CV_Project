import './pomodoro-timer.scss';

import React, { FC, useContext, useEffect } from 'react';

import { PomodoroTimerCtx } from '../../utils/context';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import Pomodoro from './pomodoro/Pomodoro';
import SetPomodoro from './setPomodoro/SetPomodoro';

const PomodoroTimer: FC = () => {
  const { pomodoro, executing, startAnimate, updateExecute } =
    useContext(PomodoroTimerCtx);

  useEffect(
    () => updateExecute(executing),
    //eslint-disable-next-line
    [executing, startAnimate]
  );

  return (
    <ComponentWrapper disableToast>
      <div className="pomodoro-timer__container">
        <h1>Pomodoro</h1>
        <small>Be productive the right way.</small>

        {pomodoro === 0 ? <SetPomodoro /> : <Pomodoro />}
      </div>
    </ComponentWrapper>
  );
};

export default PomodoroTimer;
