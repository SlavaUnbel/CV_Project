import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthProjectContainer from '../../../containers/authProject/AuthProjectContainer';
import ContactContainer from '../../../containers/contact/ContactContainer';
import LiveChatContainer from '../../../containers/liveChat/LiveChatContainer';
import PomodoroTimerContainer from '../../../containers/pomodoroTimer/PomodoroTimerContainer';
import PortfolioContainer from '../../../containers/portfolio/PortfolioContainer';
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
  testimonialsSwitcherPath,
  themeClockPath,
  todoAppPath,
} from '../../../utils/route';
import NotFound from '../../notFound/NotFound';
import AnimatedNavigation from '../../portfolioItems/animatedNavigation/AnimatedNavigation';
import FormWaveAnimation from '../../portfolioItems/formWaveAnimation/FormWaveAnimation';
import Hoverboard from '../../portfolioItems/hoverboard/Hoverboard';

const AppRouter: FC = () => (
  <Routes>
    {/* General Pages Routes */}
    <Route path={homePath} element={<HomeContext />} />
    <Route path={portfolioPath} element={<PortfolioContainer />} />
    <Route path={contactPath} element={<ContactContainer />} />

    {/* Portfolio Pages Routes */}
    <Route path={expandingCardsPath} element={<ExpandingCardsContainer />} />
    <Route
      path={rotatingNavigationPath}
      element={<RotatingNavigationContainer />}
    />
    <Route path={formWaveAnimationPath} element={<FormWaveAnimation />} />
    <Route path={dadJokesPath} element={<DadJokesContainer />} />
    <Route path={faqCollapsePath} element={<FaqCollapseContainer />} />
    <Route
      path={randomChoicePickerPath}
      element={<RandomChoicePickerContext />}
    />
    <Route path={animatedNavigationPath} element={<AnimatedNavigation />} />
    <Route
      path={incrementingCounterPath}
      element={<IncrementingCounterContext />}
    />
    <Route path={movieAppPath} element={<MovieAppContainer />} />
    <Route path={drinkWaterPath} element={<DrinkWaterContext />} />
    <Route path={themeClockPath} element={<ThemeClockContext />} />
    <Route path={githubProfilesPath} element={<GithubProfilesContainer />} />
    <Route
      path={passwordGeneratorPath}
      element={<PasswordGeneratorContainer />}
    />
    <Route path={authProjectPath} element={<AuthProjectContainer />} />
    <Route path={notesAppPath} element={<NotesAppContainer />} />
    <Route path={liveChatPath} element={<LiveChatContainer />} />
    <Route path={hoverboardPath} element={<Hoverboard />} />
    <Route
      path={testimonialsSwitcherPath}
      element={<TestimonialsSwitcherContainer />}
    />
    <Route path={todoAppPath} element={<TodoAppContainer />} />
    <Route path={pomodoroTimerPath} element={<PomodoroTimerContainer />} />

    {/* Not Existing Page Routing */}
    <Route path={notFoundPath} element={<NotFound />} />
  </Routes>
);

export default AppRouter;
