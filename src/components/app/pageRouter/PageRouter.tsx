import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactContainer from '../../../containers/contact/ContactContainer';
import PortfolioContainer from '../../../containers/portfolio/PortfolioContainer';
import ExpandingCardsContainer from '../../../containers/portfolioItems/ExpandingCardsContainer';
import ProgressStepsContainer from '../../../containers/portfolioItems/ProgressStepsContainer';
import RotatingNavigationContainer from '../../../containers/portfolioItems/RotatingNavigationContainer';
import SplitLandingPageContainer from '../../../containers/portfolioItems/SplitLandingPageContainer';
import WorksContainer from '../../../containers/works/WorksContainer';
import {
  contactPath,
  expandingCardsPath,
  formWaveAnimationPath,
  homePath,
  portfolioPath,
  progressStepsPath,
  rotatingNavigationPath,
  scrollAnimationPath,
  splitLandingPagePath,
  worksPath,
} from '../../../utils/route';
import Home from '../../home/Home';
import FormWaveAnimation from '../../portfolioItems/formWaveAnimation/FormWaveAnimation';
import ScrollAnimation from '../../portfolioItems/scrollAnimation/ScrollAnimation';

const PageRouter: FC = () => (
  <Switch>
    <Route exact path={homePath} component={Home} />
    <Route exact path={portfolioPath} component={PortfolioContainer} />
    <Route exact path={worksPath} component={WorksContainer} />
    <Route exact path={contactPath} component={ContactContainer} />

    <Route
      exact
      path={expandingCardsPath}
      component={ExpandingCardsContainer}
    />
    <Route exact path={progressStepsPath} component={ProgressStepsContainer} />
    <Route
      exact
      path={rotatingNavigationPath}
      component={RotatingNavigationContainer}
    />
    <Route exact path={scrollAnimationPath} component={ScrollAnimation} />
    <Route
      exact
      path={splitLandingPagePath}
      component={SplitLandingPageContainer}
    />
    <Route exact path={formWaveAnimationPath} component={FormWaveAnimation} />
  </Switch>
);

export default PageRouter;
