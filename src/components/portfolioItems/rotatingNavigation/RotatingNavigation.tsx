import React, { FC } from 'react';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Circle from './circle/Circle';
import ContentWrapper from './contentWrapper/ContentWrapper';
import NavigationBar from './navigationBar/NavigationBar';
import RandomContent from './randomContent/RandomContent';
import './rotating-navigation.scss';

const RotatingNavigation: FC = () => (
  <ComponentWrapper>
    <div className="rotating-navigation__container">
      <Circle />

      <ContentWrapper>
        <RandomContent />
      </ContentWrapper>

      <NavigationBar />
    </div>
  </ComponentWrapper>
);

export default RotatingNavigation;
