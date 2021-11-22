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

        {Array.from({ length: 20 }, (_, idx) => idx).map((box) => (
          <div className="box" key={box}>
            <h2>Content</h2>
          </div>
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default ScrollAnimation;
