import './animated-navigation.scss';

import { IconButton } from '@mui/material';
import React, { FC, useContext } from 'react';

import { AnimatedNavigationCtx } from '../../../utils/context';
import { animatedNavigationPath } from '../../../utils/route';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';

const AnimatedNavigation: FC = () => {
  const { data, newClass, toggleClass } = useContext(AnimatedNavigationCtx);

  return (
    <ComponentWrapper>
      <LoaderWrapper>
        <div className="animated-navigation__container">
          <nav className={newClass ? "active" : ""}>
            <ul>
              {data.map((item) => (
                <li key={item}>
                  <a href={animatedNavigationPath}>{item}</a>
                </li>
              ))}
            </ul>

            <IconButton onClick={toggleClass} className="btn">
              <span className="line line1" />
              <span className="line line2" />
            </IconButton>
          </nav>
        </div>
      </LoaderWrapper>
    </ComponentWrapper>
  );
};

export default AnimatedNavigation;
