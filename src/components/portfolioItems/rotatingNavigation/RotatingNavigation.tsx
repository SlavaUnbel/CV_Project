import React, { FC } from 'react';
import {
  useFetchRotatingNavigationData,
  useNavigationAnimation,
  useWindowTitle,
} from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import Circle from './circle/Circle';
import NavigationBar from './navigationBar/NavigationBar';
import RandomContent from './randomContent/RandomContent';
import './rotating-navigation.scss';

interface Props extends IWithLoading, IWithError, IWithWarning {
  data: IRotatingNavigation;
  setRotatingNavigationData: (data: IRotatingNavigation) => void;
}

const RotatingNavigation: FC<Props> = ({
  data,
  setRotatingNavigationData,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Rotating Navigation');

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
          <LoaderWrapper>
            <RandomContent data={data} />
          </LoaderWrapper>
        </div>

        <NavigationBar />
      </div>
    </ComponentWrapper>
  );
};

export default RotatingNavigation;
