import React, { FC, useContext } from 'react';

import { PomodoroTimerCtx } from '../../../utils/context';
import Button from '../../utils/button/Button';
import ToastContainer from '../../utils/toastContainer/ToastContainer';
import TimerSetting from './timerSetting/TimerSetting';

const SetPomodoro: FC = () => {
  const { newTimer, setNewTimer, handleSubmit } = useContext(PomodoroTimerCtx);

  return (
    <div className="form-container">
      <form noValidate>
        <div className="input-wrapper">
          <TimerSetting
            title="Work"
            fieldName="work"
            value={newTimer.work}
            newTimer={newTimer}
            setNewTimer={setNewTimer}
          />

          <TimerSetting
            title="Short Break"
            fieldName="short"
            value={newTimer.short}
            newTimer={newTimer}
            setNewTimer={setNewTimer}
          />

          <TimerSetting
            title="Long Break"
            fieldName="long"
            value={newTimer.long}
            newTimer={newTimer}
            setNewTimer={setNewTimer}
          />
        </div>

        <div className="set">
          <small className="hint">Hint: all values are given in minutes.</small>

          <Button onClick={(e) => handleSubmit(e)}>Set Timer</Button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SetPomodoro;
