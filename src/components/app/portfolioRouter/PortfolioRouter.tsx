import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import DadJokesContainer from '../../../containers/portfolioItems/DadJokesContainer';
import ExpandingCardsContainer from '../../../containers/portfolioItems/ExpandingCardsContainer';
import FaqCollapseContainer from '../../../containers/portfolioItems/FaqCollapseContainer';
import ProgressStepsContainer from '../../../containers/portfolioItems/ProgressStepsContainer';
import RotatingNavigationContainer from '../../../containers/portfolioItems/RotatingNavigationContainer';
import SplitLandingPageContainer from '../../../containers/portfolioItems/SplitLandingPageContainer';
import {
  dadJokesPath,
  expandingCardsPath,
  faqCollapsePath,
  formWaveAnimationPath,
  progressStepsPath,
  randomChoicePickerPath,
  rotatingNavigationPath,
  scrollAnimationPath,
  splitLandingPagePath,
} from '../../../utils/route';
import FormWaveAnimation from '../../portfolioItems/formWaveAnimation/FormWaveAnimation';
import RandomChoicePicker from '../../portfolioItems/randomChoicePicker/RandomChoicePicker';
import ScrollAnimation from '../../portfolioItems/scrollAnimation/ScrollAnimation';

const PortfolioRouter: FC = () => (
  <Switch>
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
    <Route exact path={dadJokesPath} component={DadJokesContainer} />
    <Route exact path={faqCollapsePath} component={FaqCollapseContainer} />
    <Route exact path={randomChoicePickerPath} component={RandomChoicePicker} />
  </Switch>
);

export default PortfolioRouter;
