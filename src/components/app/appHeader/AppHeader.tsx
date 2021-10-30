import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../../../containers/header/HeaderContainer';
import MenuContainer from '../../../containers/menu/MenuContainer';

const AppHeader: FC = () => (
  <>
    <Route component={HeaderContainer} />
    <Route component={MenuContainer} />
  </>
);

export default AppHeader;
