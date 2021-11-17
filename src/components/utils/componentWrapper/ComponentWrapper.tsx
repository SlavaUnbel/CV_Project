import React, { FC, useEffect, useState } from 'react';
import ToastContainer from '../toastContainer/ToastContainer';
import './component-wrapper.scss';

interface Props extends IWithChildren {
  disableToast?: boolean;
  toastClose?: number | false;
  toastLimit?: number;
  onToastClick?: () => void;
}

const ComponentWrapper: FC<Props> = ({
  children,
  disableToast,
  toastClose,
  toastLimit,
  onToastClick,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <div className={`component-wrapper ${mounted ? 'mounted' : ''}`}>
      {children}

      {!disableToast && (
        <ToastContainer
          autoClose={toastClose}
          limit={toastLimit}
          onClick={onToastClick}
        />
      )}
    </div>
  );
};

export default ComponentWrapper;
