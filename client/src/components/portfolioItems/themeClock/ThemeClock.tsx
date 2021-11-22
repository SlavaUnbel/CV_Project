import React, { FC, useContext } from 'react';
import { ThemeClockCtx } from '../../../utils/context';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Clock from './clock/Clock';
import './theme-clock.scss';

const ThemeClock: FC = () => {
  const { newClass, toggleClass } = useContext(ThemeClockCtx);

  return (
    <ComponentWrapper>
      <div className={`theme-clock__container ${newClass ? 'dark' : ''}`}>
        <Button className="theme-toggle" onClick={toggleClass}>
          {newClass ? 'Light' : 'Dark'} mode
        </Button>

        <Clock />
      </div>
    </ComponentWrapper>
  );
};

export default ThemeClock;
