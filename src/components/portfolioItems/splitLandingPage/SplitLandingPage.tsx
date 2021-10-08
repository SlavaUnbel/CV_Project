import React, { FC } from 'react';
import {
  useFetchSplitLandingPageData,
  useSplitLandingPageHoverEffect,
  useWindowTitle,
} from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Loader from '../../utils/loader/Loader';
import SidePage from './sidePage/SidePage';
import './split-landing-page.scss';

interface Props extends IWithLoading, IWithError, IWithWarning {
  splitLandingPageData: ISplitLandingPage[];
  setSplitLandingPageData: (data: ISplitLandingPage[]) => void;
}

const SplitLandingPage: FC<Props> = ({
  splitLandingPageData,
  setSplitLandingPageData,

  loading,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Split Landing Page');

  useFetchSplitLandingPageData({
    setSplitLandingPageData,
    setLoading,
    pushError,
    pushWarning,
  });

  const { ref, enterLeft, enterRight, leaveLeft, leaveRight, leaveBoth } =
    useSplitLandingPageHoverEffect(splitLandingPageData);

  return (
    <ComponentWrapper>
      {!loading ? (
        <div
          className="split-landing-page__container"
          ref={ref}
          onMouseLeave={leaveBoth}
          onClick={leaveBoth}
        >
          {splitLandingPageData.map((page, idx) => (
            <SidePage
              key={idx}
              page={page}
              onMouseEnter={page.side === 'left' ? enterLeft : enterRight}
              onMouseLeave={page.side === 'left' ? leaveLeft : leaveRight}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </ComponentWrapper>
  );
};

export default SplitLandingPage;