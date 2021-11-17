import React, { FC } from 'react';
import { ToastContainer as ToastContainerUI } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  autoClose?: number | false;
  limit?: number;
  onClick?: () => void;
}

const ToastContainer: FC<Props> = ({ autoClose, limit, onClick }) => (
  <ToastContainerUI
    onClick={onClick}
    closeButton={false}
    theme="colored"
    limit={limit || 3}
    autoClose={autoClose}
    position="bottom-right"
  />
);

export default ToastContainer;
