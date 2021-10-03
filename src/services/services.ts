import PortfolioItemsService from './abstract/PortfolioItemsService';
import PortfolioService from './abstract/PortfolioService';
import WorksService from './abstract/WorksService';
import PortfolioItemsServiceMock from './mock/PortfolioItemsServiceMock';
import PortfolioServiceMock from './mock/PortfolioServiceMock';
import WorksServiceMock from './mock/WorksServiceMock';

export interface Services {
  portfolioService: PortfolioService;
  worksService: WorksService;
  portfolioItemsService: PortfolioItemsService;
}

export const services: Services = {
  portfolioService: new PortfolioServiceMock(),
  worksService: new WorksServiceMock(),
  portfolioItemsService: new PortfolioItemsServiceMock(),
}