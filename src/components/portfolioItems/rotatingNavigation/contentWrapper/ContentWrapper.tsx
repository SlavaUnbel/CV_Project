import React, { FC, useContext } from 'react';
import { RotatingNavigationCtx } from '../../../../utils/context';
import LoaderWrapper from '../../../utils/loaderWrapper/LoaderWrapper';

const ContentWrapper: FC = (props) => {
  const { ref } = useContext(RotatingNavigationCtx);

  return (
    <div className="rotating-navigation__wrapper" ref={ref}>
      <LoaderWrapper>{props.children}</LoaderWrapper>
    </div>
  );
};

export default ContentWrapper;
