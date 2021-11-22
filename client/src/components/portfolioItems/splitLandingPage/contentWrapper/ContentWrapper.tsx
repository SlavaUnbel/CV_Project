import React, { FC, useContext } from 'react';
import { SplitLandingPageCtx } from '../../../../utils/context';
import LoaderWrapper from '../../../utils/loaderWrapper/LoaderWrapper';

const ContentWrapper: FC = (props) => {
  const { ref, leaveBoth } = useContext(SplitLandingPageCtx);

  return (
    <div
      className="split-landing-page__container"
      ref={ref}
      onMouseLeave={leaveBoth}
      onClick={leaveBoth}
    >
      <LoaderWrapper>{props.children}</LoaderWrapper>
    </div>
  );
};

export default ContentWrapper;
