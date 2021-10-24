import React, { FC } from 'react';
import {
  useFetchAnimatedNavigationData,
  useToggleClass,
  useWindowTitle,
} from '../../../utils/hooks';
import { animatedNavigationPath } from '../../../utils/route';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import './animated-navigation.scss';

interface Props extends IWithLoading, IWithError, IWithWarning {
  data: string[];
  setAnimatedNavigationData: (data: string[]) => void;
}

const AnimatedNavigation: FC<Props> = ({
  data,
  setAnimatedNavigationData,
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

  const { newClass, toggleClass } = useToggleClass();

  return (
    <ComponentWrapper>
      <LoaderWrapper>
        <div className="animated-navigation__container">
          <nav className={newClass ? 'active' : ''}>
            <ul>
              {data.map((item) => (
                <li key={item}>
                  <a href={animatedNavigationPath}>{item}</a>
                </li>
              ))}
            </ul>

            <Button onClick={toggleClass}>
              <span className="line line1" />
              <span className="line line2" />
            </Button>
          </nav>
        </div>
      </LoaderWrapper>
    </ComponentWrapper>
  );
};

export default AnimatedNavigation;
