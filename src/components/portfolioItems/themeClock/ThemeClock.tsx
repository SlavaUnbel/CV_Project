import React, { FC } from 'react';
import {
  useSetTimeAndDate,
  useToggleClass,
  useWindowTitle,
} from '../../../utils/hooks';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './theme-clock.scss';

const ThemeClock: FC = () => {
  useWindowTitle('Theme Clock');

  const { newClass, toggleClass } = useToggleClass();

  const refs = useSetTimeAndDate();

  return (
    <ComponentWrapper>
      <div className={`theme-clock__container ${newClass ? 'dark' : ''}`}>
        <Button className="theme-toggle" onClick={toggleClass}>
          {newClass ? 'Light' : 'Dark'} mode
        </Button>

        <div className="clock-container">
          <div className="clock">
            <div className="needle hour" ref={refs.hourRef} />
            <div className="needle minute" ref={refs.minuteRef} />
            <div className="needle second" ref={refs.secondRef} />

            <div className="center-point" />
          </div>

          <div className="time" ref={refs.timeRef} />
          <div className="date" ref={refs.dateRef} />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default ThemeClock;
