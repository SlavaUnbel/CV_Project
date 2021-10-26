import React, { FC } from 'react';
import RotatingNavigation from '../../components/portfolioItems/rotatingNavigation/RotatingNavigation';
import { RotatingNavigationCtx } from '../../utils/context';
import {
  useFetchRotatingNavigationData,
  useNavigationAnimation,
  useWindowTitle,
} from '../../utils/hooks';

interface Props extends IWithLoading, IWithError, IWithWarning {
  data: IRotatingNavigation;
  setData: (data: IRotatingNavigation) => void;
}

const RotatingNavigationContext: FC<Props> = ({
  data,
  setData,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Rotating Navigation');

  useFetchRotatingNavigationData({
    setData,
    setLoading,
    pushError,
    pushWarning,
  });

  const { ref, open, close } = useNavigationAnimation();

  return (
    <RotatingNavigationCtx.Provider
      value={{
        data,
        setData,
        setLoading,

        pushError,
        pushWarning,

        ref,
        open,
        close,
      }}
    >
      <RotatingNavigation />
    </RotatingNavigationCtx.Provider>
  );
};

export default RotatingNavigationContext;
