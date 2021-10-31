import React, { FC, useEffect, useState } from 'react';
import ToastContainer from '../toastContainer/ToastContainer';
import './component-wrapper.scss';

const ComponentWrapper: FC = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <div className={`component-wrapper ${mounted ? 'mounted' : ''}`}>
      {props.children}

      <ToastContainer />
    </div>
  );
};

export default ComponentWrapper;
