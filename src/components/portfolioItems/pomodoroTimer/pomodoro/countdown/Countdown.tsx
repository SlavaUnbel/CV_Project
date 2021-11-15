import React, { FC, useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { PomodoroTimerCtx } from '../../../../../utils/context';

const Countdown: FC = (props) => {
  const { stopTimer, executing, pomodoro, startAnimate, pushSuccess } =
    useContext(PomodoroTimerCtx);

  return (
    <div className="timer-container">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={pomodoro}
          isPlaying={startAnimate}
          duration={pomodoro * 60}
          colors={[['#fe6f6b', 0.33]]}
          strokeWidth={7}
          size={240}
          trailColor="#c9ccea"
          onComplete={() => {
            stopTimer();
            pushSuccess(
              `${
                executing.active === 'work'
                  ? "You've done well! Now take a rest and set one of Break Timers"
                  : "What's up? Hope you enjoyed your break. Now get it together and set Working Timer"
              }`,
            );
          }}
        >
          {props.children}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Countdown;
