import React, { FC } from 'react';
import {
  useFetchSplitLandingPageData,
  useSplitLandingPageHoverEffect,
  useWindowTitle,
} from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import SidePage from './sidePage/SidePage';
import './split-landing-page.scss';

interface Props extends IWithLoading, IWithError, IWithWarning {
  data: ISplitLandingPage[];
  setSplitLandingPageData: (data: ISplitLandingPage[]) => void;
}

const SplitLandingPage: FC<Props> = ({
  data,
  setSplitLandingPageData,
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
    useSplitLandingPageHoverEffect(data);

  return (
    <ComponentWrapper>
      <LoaderWrapper>
        <div
          className="split-landing-page__container"
          ref={ref}
          onMouseLeave={leaveBoth}
          onClick={leaveBoth}
        >
          {data.map((page, idx) => (
            <SidePage
              key={idx}
              page={page}
              onMouseEnter={page.side === 'left' ? enterLeft : enterRight}
              onMouseLeave={page.side === 'left' ? leaveLeft : leaveRight}
            />
          ))}
        </div>
      </LoaderWrapper>
    </ComponentWrapper>
  );
};

export default SplitLandingPage;
