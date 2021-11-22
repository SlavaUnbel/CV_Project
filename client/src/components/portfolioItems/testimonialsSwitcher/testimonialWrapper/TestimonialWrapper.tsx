import React, { FC } from 'react';
import LoaderWrapper from '../../../utils/loaderWrapper/LoaderWrapper';

const TestimonialWrapper: FC = (props) => (
  <LoaderWrapper
    wrapperStyle={{
      height: '100%',
      overflow: 'hidden',
      margin: '3rem 0',
    }}
  >
    {props.children}
  </LoaderWrapper>
);

export default TestimonialWrapper;
