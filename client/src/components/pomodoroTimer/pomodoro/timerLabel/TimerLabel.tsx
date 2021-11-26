import React, { FC, useContext } from 'react';

import { PomodoroTimerCtx } from '../../../../utils/context';
import Button from '../../../utils/button/Button';

interface Props {
  label: string;
  title: string;
}

const TimerLabel: FC<Props> = ({ label, title }) => {
  const { executing, changeTimer } = useContext(PomodoroTimerCtx);

  return (
    <li>
      <Button
        onClick={() => changeTimer(label)}
        className={`${executing.active === label ? "active-label" : ""}`}
      >
        {title}
      </Button>
    </li>
  );
};

export default TimerLabel;
