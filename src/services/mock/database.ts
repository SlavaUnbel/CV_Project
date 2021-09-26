import { generatePortfolioData } from './databaseMethods';

interface DATABASE {
  portfolioData: IPortfolio[];
}

export const database: DATABASE = {
  portfolioData: [...generatePortfolioData(30, 1)]
};


