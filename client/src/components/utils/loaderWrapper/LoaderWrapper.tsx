import React, { CSSProperties, FC } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../../reducers/rootReducer';
import './loader-wrapper.scss';

interface Props extends IWithLoading, IWithChildren {
  wrapperStyle?: CSSProperties;
  circleStyle?: CSSProperties;
}

const Loader: FC<Props> = ({
  children,
  loading,
  wrapperStyle,
  circleStyle,
}) => (
  <>
    {!loading ? (
      children
    ) : (
      <div className="loader-wrapper" style={wrapperStyle}>
        <div className="loader" style={circleStyle} />
      </div>
    )}
  </>
);

export default connect((state: IState) => ({ loading: state.loading.loading }))(
  Loader,
);
