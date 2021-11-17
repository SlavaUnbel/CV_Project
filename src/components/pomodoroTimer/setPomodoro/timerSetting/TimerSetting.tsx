import { Add, Remove } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { ChangeEvent, FC, useState } from 'react';

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
  const [focused, setFocused] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (value.length > 5) return;

    const changeValue = (key: string) => {
      parseFloat(value) >= 0 && parseFloat(value) <= 60
        ? setNewTimer({ ...newTimer, [key]: parseFloat(value) })
        : parseFloat(value) > 60
        ? setNewTimer({ ...newTimer, [key]: 60 })
        : setNewTimer({ ...newTimer, [key]: 0 });
    };

    changeValue(name);
  };

  const incTimer = (key: string, value: number) => {
    value < 60 &&
      setNewTimer({
        ...newTimer,
        [key]:
          value > 59
            ? Math.floor(+(value + 1).toFixed(2))
            : +(value + 1).toFixed(2),
      });
  };

  const decTimer = (key: string, value: number) =>
    value > 0 &&
    setNewTimer({
      ...newTimer,
      [key]:
        value < 1
          ? Math.ceil(+(value - 1).toFixed(2))
          : +(value - 1).toFixed(2),
    });

  return (
    <div className="form-control">
      <small className={`${focused === fieldName && 'focused'}`}>{title}</small>

      <IconButton onClick={() => incTimer(fieldName, value)}>
        <Add />
      </IconButton>

      <input
        type="number"
        className="input"
        name={fieldName}
        onChange={handleChange}
        value={value}
        onFocus={() => setFocused(fieldName)}
        onBlur={() => setFocused('')}
      />

      <IconButton onClick={() => decTimer(fieldName, value)}>
        <Remove />
      </IconButton>
    </div>
  );
};

export default TimerSetting;
