import React, { FC } from 'react';
import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './drawing-app.scss';

const DrawingApp: FC = () => {
  useWindowTitle('Drawing App');

  return (
    <ComponentWrapper>
      <div className="drawing-app__container">
        <canvas width="800" height="800" />

        <div className="toolbox">
          <button className="decrease">-</button>
          <span className="size">20</span>
          <button className="increase">+</button>
          <input type="color" className="color" />
          <button className="clear">X</button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DrawingApp;
