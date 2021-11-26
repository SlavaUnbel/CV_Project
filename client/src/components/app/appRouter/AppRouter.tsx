import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AuthProjectContainer from '../../../containers/authProject/AuthProjectContainer';
import ContactContainer from '../../../containers/contact/ContactContainer';
import LiveChatContainer from '../../../containers/liveChat/LiveChatContainer';
import PomodoroTimerContainer from '../../../containers/pomodoroTimer/PomodoroTimerContainer';
import PortfolioContainer from '../../../containers/portfolio/PortfolioContainer';
import AnimatedNavigationContainer from '../../../containers/portfolioItems/AnimatedNavigationContainer';
import DadJokesContainer from '../../../containers/portfolioItems/DadJokesContainer';
import ExpandingCardsContainer from '../../../containers/portfolioItems/ExpandingCardsContainer';
import FaqCollapseContainer from '../../../containers/portfolioItems/FaqCollapseContainer';
import GithubProfilesContainer from '../../../containers/portfolioItems/GithubProfilesContainer';
import MovieAppContainer from '../../../containers/portfolioItems/MovieAppContainer';
import NotesAppContainer from '../../../containers/portfolioItems/NotesAppContainer';
import PasswordGeneratorContainer from '../../../containers/portfolioItems/PasswordGeneratorContainer';
import RotatingNavigationContainer from '../../../containers/portfolioItems/RotatingNavigationContainer';
import TestimonialsSwitcherContainer from '../../../containers/portfolioItems/TestimonialsSwitcherContainer';
import TodoAppContainer from '../../../containers/portfolioItems/TodoAppContainer';
import HomeContext from '../../../context/home/HomeContext';
import DrinkWaterContext from '../../../context/portfolioItems/DrinkWaterContext';
import IncrementingCounterContext from '../../../context/portfolioItems/IncrementingCounterContext';
import RandomChoicePickerContext from '../../../context/portfolioItems/RandomChoicePickerContext';
import ThemeClockContext from '../../../context/portfolioItems/ThemeClockContext';
import {
  animatedNavigationPath,
  authProjectPath,
  contactPath,
  dadJokesPath,
  drinkWaterPath,
  expandingCardsPath,
  faqCollapsePath,
  formWaveAnimationPath,
  githubProfilesPath,
  homePath,
  hoverboardPath,
  incrementingCounterPath,
  liveChatPath,
  movieAppPath,
  notesAppPath,
  notFoundPath,
  passwordGeneratorPath,
  pomodoroTimerPath,
  portfolioPath,
  randomChoicePickerPath,
  rotatingNavigationPath,
  scrollAnimationPath,
  testimonialsSwitcherPath,
  themeClockPath,
  todoAppPath,
} from '../../../utils/route';
import NotFound from '../../notFound/NotFound';
import FormWaveAnimation from '../../portfolioItems/formWaveAnimation/FormWaveAnimation';
import Hoverboard from '../../portfolioItems/hoverboard/Hoverboard';
import ScrollAnimation from '../../portfolioItems/scrollAnimation/ScrollAnimation';

const AppRouter: FC = () => (
  <Switch>
    {/* General Pages Routes */}
    <Route exact path={homePath} component={HomeContext} />
    <Route exact path={portfolioPath} component={PortfolioContainer} />
    <Route exact path={contactPath} component={ContactContainer} />

    {/* Portfolio Pages Routes */}
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
    <Route exact path={authProjectPath} component={AuthProjectContainer} />
    <Route exact path={notesAppPath} component={NotesAppContainer} />
    <Route exact path={liveChatPath} component={LiveChatContainer} />
    <Route exact path={hoverboardPath} component={Hoverboard} />
    <Route
      exact
      path={testimonialsSwitcherPath}
      component={TestimonialsSwitcherContainer}
    />
    <Route exact path={todoAppPath} component={TodoAppContainer} />
    <Route exact path={pomodoroTimerPath} component={PomodoroTimerContainer} />

    {/* Not Existing Page Routing */}
    <Route exact path={notFoundPath} component={NotFound} />
    <Redirect to={notFoundPath} />
  </Switch>
);

export default AppRouter;
