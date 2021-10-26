import React, { FC, useContext } from 'react';
import { ThemeClockCtx } from '../../../../utils/context';

const Clock: FC = () => {
  const { hourRef, minuteRef, secondRef, timeRef, dateRef } =
    useContext(ThemeClockCtx);

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="needle hour" ref={hourRef} />
        <div className="needle minute" ref={minuteRef} />
        <div className="needle second" ref={secondRef} />

        <div className="center-point" />
      </div>

      <div className="time" ref={timeRef} />
      <div className="date" ref={dateRef} />
    </div>
  );
};

export default Clock;
