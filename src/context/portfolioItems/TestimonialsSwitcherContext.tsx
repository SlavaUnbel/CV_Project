import React, { FC } from 'react';
import TestimonialsSwitcher from '../../components/portfolioItems/testimonialsSwitcher/TestimonialsSwitcher';
import {
  ITestimonialsSwitcherContext,
  TestimonialsSwitcherCtx,
} from '../../utils/context';
import {
  useFetchTestimonialsSwitcherData,
  useWindowTitle,
} from '../../utils/hooks';

const TestimonialsSwitcherContext: FC<ITestimonialsSwitcherContext> = ({
  data,
  setData,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Testimonials Switcher');

  useFetchTestimonialsSwitcherData({
    setData,
    setLoading,
    pushError,
    pushWarning,
  });

  return (
    <TestimonialsSwitcherCtx.Provider
      value={{
        data,
        setData,
        setLoading,

        pushError,
        pushWarning,
      }}
    >
      <TestimonialsSwitcher />
    </TestimonialsSwitcherCtx.Provider>
  );
};

export default TestimonialsSwitcherContext;
