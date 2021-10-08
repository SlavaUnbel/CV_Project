import React, { FC } from 'react';
import './loader.scss';

interface Props {
  height?: string;
}

const Loader: FC<Props> = ({ height }) => (
  <div className="loader-wrapper" style={{ height }}>
    <div className="loader" />
  </div>
);

export default Loader;
