import { generatePortfolioData, generateWorksData } from './databaseMethods';

interface DATABASE {
  portfolioData: IPortfolio[];
  worksData: IWorks[];
}

export const database: DATABASE = {
  portfolioData: [...generatePortfolioData(30, 1)],
  worksData: [...generateWorksData(3, 1)],
};


