import React, { FC } from 'react';
import AnimatedNavigation from '../../components/portfolioItems/animatedNavigation/AnimatedNavigation';
import { AnimatedNavigationCtx } from '../../utils/context';
import {
  useFetchAnimatedNavigationData,
  useToggleClass,
  useWindowTitle,
} from '../../utils/hooks';

interface Props extends IWithLoading, IWithError, IWithWarning {
  data: string[];
  setData: (data: string[]) => void;
}

const AnimatedNavigationContext: FC<Props> = ({
  data,
  setData,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Animated Navigation');

  useFetchAnimatedNavigationData({
    setData,
    setLoading,
    pushError,
    pushWarning,
  });

  const { newClass, toggleClass } = useToggleClass();

  return (
    <AnimatedNavigationCtx.Provider
      value={{
        data,
        setData,
        setLoading,

        pushError,
        pushWarning,

        newClass,
        toggleClass,
      }}
    >
      <AnimatedNavigation />
    </AnimatedNavigationCtx.Provider>
  );
};

export default AnimatedNavigationContext;
