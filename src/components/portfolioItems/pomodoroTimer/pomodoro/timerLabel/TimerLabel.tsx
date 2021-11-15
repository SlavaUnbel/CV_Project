import React, { FC, useContext } from 'react';
import { PomodoroTimerCtx } from '../../../../../utils/context';
import Button from '../../../../utils/button/Button';

interface Props {
  label: string;
  title: string;
}

const TimerLabel: FC<Props> = ({ label, title }) => {
  const { executing, setTimerDisabled, stopTimer, setCurrentTimer, setOpened } =
    useContext(PomodoroTimerCtx);

  return (
    <li>
      <Button
        onClick={() => {
          stopTimer();
          setCurrentTimer(label);
          if (executing.active !== label) {
            setOpened(false);
            setTimerDisabled(false);
          }
        }}
        className={`${executing.active === label ? 'active-label' : ''}`}
      >
        {title}
      </Button>
    </li>
  );
};

export default TimerLabel;
