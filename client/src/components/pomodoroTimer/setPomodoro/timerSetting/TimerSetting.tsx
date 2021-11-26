import { Add, Remove } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { FC } from 'react';

import { useSetTimer } from '../../../../utils/hooks';

interface Props {
  title: string;
  fieldName: string;
  value: number;
  newTimer: IPomodoroTimer;
  setNewTimer: (timer: IPomodoroTimer) => void;
}

const TimerSetting: FC<Props> = ({
  title,
  fieldName,
  value,
  newTimer,
  setNewTimer,
}) => {
  const { focused, setFocused, handleChange, incTimer, decTimer } = useSetTimer(
    { newTimer, setNewTimer }
  );

  return (
    <div className="form-control">
      <small className={`${focused === fieldName && "focused"}`}>{title}</small>

      <div className="time-setting">
        <IconButton onClick={() => decTimer(fieldName, value)}>
          <Remove />
        </IconButton>

        <input
          autoComplete="off"
          type="number"
          className="input"
          name={fieldName}
          onChange={handleChange}
          value={value}
          onFocus={() => setFocused(fieldName)}
          onBlur={() => setFocused("")}
        />

        <IconButton onClick={() => incTimer(fieldName, value)}>
          <Add />
        </IconButton>
      </div>
    </div>
  );
};

export default TimerSetting;
