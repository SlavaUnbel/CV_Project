import React, { FC } from 'react';
import ToastContainer from '../toastContainer/ToastContainer';
import './component-wrapper.scss';

interface Props {
  children: any;
}

const ComponentWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="component-wrapper">
      {children}

      <ToastContainer />
    </div>
  );
};

export default ComponentWrapper;
