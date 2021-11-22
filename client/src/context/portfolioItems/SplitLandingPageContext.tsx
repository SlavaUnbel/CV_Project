import React, { FC } from 'react';
import SplitLandingPage from '../../components/portfolioItems/splitLandingPage/SplitLandingPage';
import { SplitLandingPageCtx } from '../../utils/context';
import {
  useFetchSplitLandingPageData,
  useSplitLandingPageHoverEffect,
  useWindowTitle,
} from '../../utils/hooks';

interface Props extends IWithLoading, IWithError, IWithWarning {
  data: ISplitLandingPage[];
  setData: (data: ISplitLandingPage[]) => void;
}

const SplitLandingPageContext: FC<Props> = ({
  data,
  setData,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Split Landing Page');

  useFetchSplitLandingPageData({
    setData,
    setLoading,
    pushError,
    pushWarning,
  });

  const { ref, enterLeft, enterRight, leaveLeft, leaveRight, leaveBoth } =
    useSplitLandingPageHoverEffect(data);

  return (
    <SplitLandingPageCtx.Provider
      value={{
        data,
        setData,
        setLoading,

        pushError,
        pushWarning,

        ref,
        enterLeft,
        enterRight,
        leaveLeft,
        leaveRight,
        leaveBoth,
      }}
    >
      <SplitLandingPage />
    </SplitLandingPageCtx.Provider>
  );
};

export default SplitLandingPageContext;
