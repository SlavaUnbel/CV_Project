import React, { FC } from 'react';
import {
  useAnimatiedNavigationToggle,
  useFetchAnimatedNavigationData,
  useWindowTitle,
} from '../../../utils/hooks';
import { animatedNavigationPath } from '../../../utils/route';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Loader from '../../utils/loader/Loader';
import './animated-navigation.scss';

interface Props extends IWithLoading, IWithError, IWithWarning {
  animatedNavigationData: string[];
  setAnimatedNavigationData: (data: string[]) => void;
}

const AnimatedNavigation: FC<Props> = ({
  animatedNavigationData,
  setAnimatedNavigationData,

  loading,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Animated Navigation');

  useFetchAnimatedNavigationData({
    setAnimatedNavigationData,
    setLoading,
    pushError,
    pushWarning,
  });

  const { navRef, toggle } = useAnimatiedNavigationToggle();

  return (
    <ComponentWrapper>
      {!loading ? (
        <div className="animated-navigation__container">
          <nav className="active" ref={navRef}>
            <ul>
              {animatedNavigationData.map((item) => (
                <li key={item}>
                  <a href={animatedNavigationPath}>{item}</a>
                </li>
              ))}
            </ul>

            <button onClick={toggle}>
              <span className="line line1" />
              <span className="line line2" />
            </button>
          </nav>
        </div>
      ) : (
        <Loader />
      )}
    </ComponentWrapper>
  );
};

export default AnimatedNavigation;
