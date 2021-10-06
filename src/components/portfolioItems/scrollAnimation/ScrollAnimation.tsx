import React, { FC } from 'react';
import { useScrollingAnimation, useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './scroll-animation.scss';

const ScrollAnimation: FC = () => {
  useWindowTitle('Scroll Animation');

  const ref = useScrollingAnimation();

  return (
    <ComponentWrapper>
      <div className="scroll-animation__container" ref={ref}>
        <h1>Scroll to see the animation</h1>

        {new Array(20).fill(1).map((_, idx) => (
          <div className="box" key={idx}>
            <h2>Content</h2>
          </div>
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default ScrollAnimation;
