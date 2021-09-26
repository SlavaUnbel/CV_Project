import PortfolioService from './abstract/PortfolioService';
import WorksService from './abstract/WorksService';
import PortfolioServiceMock from './mock/PortfolioServiceMock';
import WorksServiceMock from './mock/WorksServiceMock';

export interface Services {
  portfolioService: PortfolioService;
  worksService: WorksService;
}

export const services: Services = {
  portfolioService: new PortfolioServiceMock(),
  worksService: new WorksServiceMock(),
}