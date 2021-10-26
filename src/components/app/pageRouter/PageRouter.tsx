import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactContainer from '../../../containers/contact/ContactContainer';
import PortfolioContainer from '../../../containers/portfolio/PortfolioContainer';
import WorksContainer from '../../../containers/works/WorksContainer';
import HomeContext from '../../../context/home/HomeContext';
import {
  contactPath,
  homePath,
  portfolioPath,
  worksPath,
} from '../../../utils/route';

const PageRouter: FC = () => (
  <Switch>
    <Route exact path={homePath} component={HomeContext} />
    <Route exact path={portfolioPath} component={PortfolioContainer} />
    <Route exact path={worksPath} component={WorksContainer} />
    <Route exact path={contactPath} component={ContactContainer} />
  </Switch>
);

export default PageRouter;
