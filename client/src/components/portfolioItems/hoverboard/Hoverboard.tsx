import React, { FC } from 'react';
import { useHoverboard, useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './hoverboard.scss';

const Hoverboard: FC = () => {
  useWindowTitle('Hoverboard');

  const wrapperRef = useHoverboard();

  return (
    <ComponentWrapper>
      <div className="hoverboard__container">
        <div className="hoverboard__wrapper" ref={wrapperRef} />
      </div>
    </ComponentWrapper>
  );
};

export default Hoverboard;
