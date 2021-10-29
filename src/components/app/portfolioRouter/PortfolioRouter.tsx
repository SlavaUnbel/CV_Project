import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotesAppContainer from '../../../containers/notesApp/NotesAppContainer';
import AnimatedNavigationContainer from '../../../containers/portfolioItems/AnimatedNavigationContainer';
import DadJokesContainer from '../../../containers/portfolioItems/DadJokesContainer';
import ExpandingCardsContainer from '../../../containers/portfolioItems/ExpandingCardsContainer';
import FaqCollapseContainer from '../../../containers/portfolioItems/FaqCollapseContainer';
import GithubProfilesContainer from '../../../containers/portfolioItems/GithubProfilesContainer';
import MovieAppContainer from '../../../containers/portfolioItems/MovieAppContainer';
import PasswordGeneratorContainer from '../../../containers/portfolioItems/PasswordGeneratorContainer';
import RotatingNavigationContainer from '../../../containers/portfolioItems/RotatingNavigationContainer';
import SplitLandingPageContainer from '../../../containers/portfolioItems/SplitLandingPageContainer';
import TestimonialsSwitcherContainer from '../../../containers/portfolioItems/TestimonialsSwitcherContainer';
import DrinkWaterContext from '../../../context/portfolioItems/DrinkWaterContext';
import IncrementingCounterContext from '../../../context/portfolioItems/IncrementingCounterContext';
import RandomChoicePickerContext from '../../../context/portfolioItems/RandomChoicePickerContext';
import ThemeClockContext from '../../../context/portfolioItems/ThemeClockContext';
import {
  animatedNavigationPath,
  dadJokesPath,
  drinkWaterPath,
  expandingCardsPath,
  faqCollapsePath,
  formWaveAnimationPath,
  githubProfilesPath,
  hoverboardPath,
  incrementingCounterPath,
  movieAppPath,
  notesAppPath,
  passwordGeneratorPath,
  randomChoicePickerPath,
  rotatingNavigationPath,
  scrollAnimationPath,
  splitLandingPagePath,
  testimonialsSwitcherPath,
  themeClockPath,
} from '../../../utils/route';
import FormWaveAnimation from '../../portfolioItems/formWaveAnimation/FormWaveAnimation';
import Hoverboard from '../../portfolioItems/hoverboard/Hoverboard';
import ScrollAnimation from '../../portfolioItems/scrollAnimation/ScrollAnimation';

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
    <Route
      exact
      path={randomChoicePickerPath}
      component={RandomChoicePickerContext}
    />
    <Route
      exact
      path={animatedNavigationPath}
      component={AnimatedNavigationContainer}
    />
    <Route
      exact
      path={incrementingCounterPath}
      component={IncrementingCounterContext}
    />
    <Route exact path={movieAppPath} component={MovieAppContainer} />
    <Route exact path={drinkWaterPath} component={DrinkWaterContext} />
    <Route exact path={themeClockPath} component={ThemeClockContext} />
    <Route
      exact
      path={githubProfilesPath}
      component={GithubProfilesContainer}
    />
    <Route
      exact
      path={passwordGeneratorPath}
      component={PasswordGeneratorContainer}
    />
    <Route exact path={notesAppPath} component={NotesAppContainer} />
    <Route exact path={hoverboardPath} component={Hoverboard} />
    <Route
      exact
      path={testimonialsSwitcherPath}
      component={TestimonialsSwitcherContainer}
    />
  </Switch>
);

export default PortfolioRouter;
