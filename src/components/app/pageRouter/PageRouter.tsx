import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  contactPath,
  homePath,
  portfolioPath,
  worksPath,
} from '../../../utils/route';
import Contact from '../../contact/Contact';
import Home from '../../home/Home';
import Portfolio from '../../portfolio/Portfolio';
import Works from '../../works/Works';

const PageRouter: FC = () => (
  <Switch>
    <Route exact path={homePath} component={Home} />

    <Route exact path={portfolioPath} component={Portfolio} />

    <Route exact path={worksPath} component={Works} />

    <Route exact path={contactPath} component={Contact} />
  </Switch>
);

export default PageRouter;
