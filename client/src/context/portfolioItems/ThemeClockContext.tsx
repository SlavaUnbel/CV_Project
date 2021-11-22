import React, { FC } from 'react';
import ThemeClock from '../../components/portfolioItems/themeClock/ThemeClock';
import { ThemeClockCtx } from '../../utils/context';
import {
  useSetTimeAndDate,
  useToggleClass,
  useWindowTitle,
} from '../../utils/hooks';

const ThemeClockContext: FC = () => {
  useWindowTitle('Theme Clock');

  const { newClass, toggleClass } = useToggleClass();

  const { hourRef, minuteRef, secondRef, dateRef, timeRef } =
    useSetTimeAndDate();

  return (
    <ThemeClockCtx.Provider
      value={{
        hourRef,
        minuteRef,
        secondRef,
        dateRef,
        timeRef,

        newClass,
        toggleClass,
      }}
    >
      <ThemeClock />
    </ThemeClockCtx.Provider>
  );
};

export default ThemeClockContext;
