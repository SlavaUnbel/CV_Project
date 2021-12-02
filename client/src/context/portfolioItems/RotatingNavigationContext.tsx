import React, { FC, useEffect } from 'react';

import RotatingNavigation from '../../components/portfolioItems/rotatingNavigation/RotatingNavigation';
import { RotatingNavigationCtx } from '../../utils/context';
import { useNavigationAnimation, useWindowTitle } from '../../utils/hooks';

interface Props {
  data: IRotatingNavigation;
  getData: () => void;
}

const RotatingNavigationContext: FC<Props> = ({ data, getData }) => {
  useWindowTitle("Rotating Navigation");

  useEffect(() => getData(), [getData]);

  const { ref, open, close } = useNavigationAnimation();

  return (
    <RotatingNavigationCtx.Provider
      value={{
        data,
        getData,

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
