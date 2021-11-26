import {
  generateExpandingCardsData,
  generateFaqCollapseData,
  generatePortfolioData,
  generateRotatingNavigationData,
  generateTestimonialsSwitcherData,
  getPomodoroTimerMusic,
} from './databaseMethods';

interface DATABASE {
  portfolioData: IPortfolio[];
  expandingCards: IExpandingCards[];
  rotatingNavigation: IRotatingNavigation;
  faqCollapse: IFaqCollapse[];
  animatedNavigation: string[];
  testimonialsSwitcher: ITestimonialsSwitcher[];
  pomodoroTimer: string[];
}

export const database: DATABASE = {
  portfolioData: [...generatePortfolioData(1)],
  expandingCards: [...generateExpandingCardsData(5, 1)],
  rotatingNavigation: generateRotatingNavigationData(),
  faqCollapse: [...generateFaqCollapseData(1)],
  animatedNavigation: ["Home", "About", "Works", "Contact"],
  testimonialsSwitcher: [...generateTestimonialsSwitcherData(7, 1)],
  pomodoroTimer: getPomodoroTimerMusic(),
};
