import React, { FC } from 'react';
import { ToastContainer as ToastContainerUI } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer: FC = () => (
  <ToastContainerUI closeButton={false} theme="colored" />
);

export default ToastContainer;
