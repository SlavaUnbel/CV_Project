import React, { CSSProperties, FC } from 'react';
import './loader.scss';

interface Props {
  wrapperStyle?: CSSProperties;
  circleStyle?: CSSProperties;
}

const Loader: FC<Props> = ({ wrapperStyle, circleStyle }) => (
  <div className="loader-wrapper" style={wrapperStyle}>
    <div className="loader" style={circleStyle} />
  </div>
);

export default Loader;
