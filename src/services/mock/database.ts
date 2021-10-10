import { generateExpandingCardsData, generateFaqCollapseData, generatePortfolioData, generateRotatingNavigationData, generateWorksData, getSplitLandingPageData } from './databaseMethods';

interface DATABASE {
  portfolioData: IPortfolio[];
  worksData: IWorks[];
  expandingCards: IExpandingCards[];
  progressStepsData: number[];
  rotatingNavigation: IRotatingNavigation;
  splitLandingPage: ISplitLandingPage[];
  faqCollapse: IFaqCollapse[]
}

export const database: DATABASE = {
  portfolioData: [...generatePortfolioData(30, 1)],
  worksData: [...generateWorksData(3, 1)],
  expandingCards: [...generateExpandingCardsData(5, 1)],
  progressStepsData: [1, 2, 3, 4],
  rotatingNavigation: generateRotatingNavigationData(),
  splitLandingPage: getSplitLandingPageData(),
  faqCollapse: [...generateFaqCollapseData(1)],
};


