import { generateExpandingCardsData, generatePortfolioData, generateWorksData } from './databaseMethods';

interface DATABASE {
  portfolioData: IPortfolio[];
  worksData: IWorks[];
  expandingCards: IExpandingCards[]
}

export const database: DATABASE = {
  portfolioData: [...generatePortfolioData(30, 1)],
  worksData: [...generateWorksData(3, 1)],
  expandingCards: [...generateExpandingCardsData(5, 1)],
};


