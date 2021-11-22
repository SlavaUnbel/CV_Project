import React, { FC, useContext } from 'react';
import { AnimatedNavigationCtx } from '../../../utils/context';
import { animatedNavigationPath } from '../../../utils/route';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import './animated-navigation.scss';

const AnimatedNavigation: FC = () => {
  const { data, newClass, toggleClass } = useContext(AnimatedNavigationCtx);

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
