import React, { FC } from 'react';
import {
  useFetchRotatingNavigationData,
  useNavigationAnimation,
} from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Loader from '../../utils/loader/Loader';
import Circle from './circle/Circle';
import NavigationBar from './navigationBar/NavigationBar';
import RandomContent from './randomContent/RandomContent';
import './rotating-navigation.scss';

interface Props extends IWithLoading, IWithError, IWithWarning {
  rotatingNavigationData: IRotatingNavigation;
  setRotatingNavigationData: (data: IRotatingNavigation) => void;
}

const RotatingNavigation: FC<Props> = ({
  rotatingNavigationData,
  setRotatingNavigationData,

  loading,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useFetchRotatingNavigationData({
    setRotatingNavigationData,
    setLoading,
    pushError,
    pushWarning,
  });

  const { ref, open, close } = useNavigationAnimation();

  return (
    <ComponentWrapper>
      <div className="rotating-navigation__wrapper">
        <Circle open={open} close={close} />

        <div className="rotating-navigation__container" ref={ref}>
          {!loading ? (
            <RandomContent data={rotatingNavigationData} />
          ) : (
            <Loader />
          )}
        </div>

        <NavigationBar />
      </div>
    </ComponentWrapper>
  );
};

export default RotatingNavigation;
