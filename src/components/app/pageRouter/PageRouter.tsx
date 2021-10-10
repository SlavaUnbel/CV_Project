import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactContainer from '../../../containers/contact/ContactContainer';
import PortfolioContainer from '../../../containers/portfolio/PortfolioContainer';
import WorksContainer from '../../../containers/works/WorksContainer';
import {
  contactPath,
  homePath,
  portfolioPath,
  worksPath,
} from '../../../utils/route';
import Home from '../../home/Home';

const PageRouter: FC = () => (
  <Switch>
    <Route exact path={homePath} component={Home} />
    <Route exact path={portfolioPath} component={PortfolioContainer} />
    <Route exact path={worksPath} component={WorksContainer} />
    <Route exact path={contactPath} component={ContactContainer} />
  </Switch>
);

export default PageRouter;
