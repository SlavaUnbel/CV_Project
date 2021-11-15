import { generateExpandingCardsData, generateFaqCollapseData, generatePortfolioData, generateRotatingNavigationData, generateTestimonialsSwitcherData, generateWorksData, getPomodoroTimerMusic, getSplitLandingPageData } from './databaseMethods';

interface DATABASE {
  portfolioData: IPortfolio[];
  worksData: IWorks[];
  expandingCards: IExpandingCards[];
  rotatingNavigation: IRotatingNavigation;
  splitLandingPage: ISplitLandingPage[];
  faqCollapse: IFaqCollapse[];
  animatedNavigation: string[];
  testimonialsSwitcher: ITestimonialsSwitcher[];
  pomodoroTimer: string[]
}

export const database: DATABASE = {
  portfolioData: [...generatePortfolioData(1)],
  worksData: [...generateWorksData(3, 1)],
  expandingCards: [...generateExpandingCardsData(5, 1)],
  rotatingNavigation: generateRotatingNavigationData(),
  splitLandingPage: getSplitLandingPageData(),
  faqCollapse: [...generateFaqCollapseData(1)],
  animatedNavigation: ['Home', 'About', 'Works', 'Contact'],
  testimonialsSwitcher: [...generateTestimonialsSwitcherData(7, 1)],
  pomodoroTimer: getPomodoroTimerMusic(),
};


