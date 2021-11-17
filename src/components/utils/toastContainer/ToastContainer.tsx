import React, { FC } from 'react';
import {
  ToastContainer as ToastContainerUI,
  ToastPosition,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  autoClose?: number | false;
  limit?: number;
  position?: ToastPosition;
  onClick?: () => void;
}

const ToastContainer: FC<Props> = ({ autoClose, limit, position, onClick }) => (
  <ToastContainerUI
    onClick={onClick}
    closeButton={false}
    theme="colored"
    limit={limit || 3}
    autoClose={autoClose}
    position={position || 'top-right'}
  />
);

export default ToastContainer;
