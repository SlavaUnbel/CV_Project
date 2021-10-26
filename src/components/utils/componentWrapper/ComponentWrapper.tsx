import React, { FC } from 'react';
import ToastContainer from '../toastContainer/ToastContainer';
import './component-wrapper.scss';

const ComponentWrapper: FC = (props) => {
  return (
    <div className="component-wrapper">
      {props.children}

      <ToastContainer />
    </div>
  );
};

export default ComponentWrapper;
