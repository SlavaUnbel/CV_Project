import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import AnimatedNavigationContainer from '../../../containers/portfolioItems/AnimatedNavigationContainer';
import DadJokesContainer from '../../../containers/portfolioItems/DadJokesContainer';
import ExpandingCardsContainer from '../../../containers/portfolioItems/ExpandingCardsContainer';
import FaqCollapseContainer from '../../../containers/portfolioItems/FaqCollapseContainer';
import GithubProfilesContainer from '../../../containers/portfolioItems/GithubProfilesContainer';
import MovieAppContainer from '../../../containers/portfolioItems/MovieAppContainer';
import RotatingNavigationContainer from '../../../containers/portfolioItems/RotatingNavigationContainer';
import SplitLandingPageContainer from '../../../containers/portfolioItems/SplitLandingPageContainer';
import {
  animatedNavigationPath,
  dadJokesPath,
  drinkWaterPath,
  expandingCardsPath,
  faqCollapsePath,
  formWaveAnimationPath,
  githubProfilesPath,
  incrementingCounterPath,
  movieAppPath,
  randomChoicePickerPath,
  rotatingNavigationPath,
  scrollAnimationPath,
  splitLandingPagePath,
  themeClockPath,
} from '../../../utils/route';
import DrinkWater from '../../portfolioItems/drinkWater/DrinkWater';
import FormWaveAnimation from '../../portfolioItems/formWaveAnimation/FormWaveAnimation';
import IncrementingCounter from '../../portfolioItems/incrementingCounter/IncrementingCounter';
import RandomChoicePicker from '../../portfolioItems/randomChoicePicker/RandomChoicePicker';
import ScrollAnimation from '../../portfolioItems/scrollAnimation/ScrollAnimation';
import ThemeClock from '../../portfolioItems/themeClock/ThemeClock';

const PortfolioRouter: FC = () => (
  <Switch>
    <Route
      exact
      path={expandingCardsPath}
      component={ExpandingCardsContainer}
    />
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
    <Route
      exact
      path={animatedNavigationPath}
      component={AnimatedNavigationContainer}
    />
    <Route
      exact
      path={incrementingCounterPath}
      component={IncrementingCounter}
    />
    <Route exact path={movieAppPath} component={MovieAppContainer} />
    <Route exact path={drinkWaterPath} component={DrinkWater} />
    <Route exact path={themeClockPath} component={ThemeClock} />
    <Route
      exact
      path={githubProfilesPath}
      component={GithubProfilesContainer}
    />
  </Switch>
);

export default PortfolioRouter;
