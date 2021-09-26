import PortfolioService from './abstract/PortfolioService';
import PortfolioServiceMock from './mock/PortfolioServiceMock';

export interface Services {
  portfolioService: PortfolioService;
}

export const services: Services = {
  portfolioService: new PortfolioServiceMock()
}