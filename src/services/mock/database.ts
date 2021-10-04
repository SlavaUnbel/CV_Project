import { generateExpandingCardsData, generatePortfolioData, generateWorksData } from './databaseMethods';

interface DATABASE {
  portfolioData: IPortfolio[];
  worksData: IWorks[];
  expandingCards: IExpandingCards[];
  progressStepsData: number[]
}

export const database: DATABASE = {
  portfolioData: [...generatePortfolioData(30, 1)],
  worksData: [...generateWorksData(3, 1)],
  expandingCards: [...generateExpandingCardsData(5, 1)],
  progressStepsData: [1, 2, 3, 4]
};


