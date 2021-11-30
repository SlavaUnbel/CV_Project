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
  rotatingNavigation: IRotatingNavigation[];
  faqCollapse: IFaqCollapse[];
  testimonialsSwitcher: ITestimonialsSwitcher[];
  pomodoroTimer: string[];
}

export const database: DATABASE = {
  portfolioData: [...generatePortfolioData()],
  expandingCards: [...generateExpandingCardsData()],
  rotatingNavigation: [...generateRotatingNavigationData()],
  faqCollapse: [...generateFaqCollapseData()],
  testimonialsSwitcher: [...generateTestimonialsSwitcherData()],
  pomodoroTimer: getPomodoroTimerMusic(),
};
