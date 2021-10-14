import axios from 'axios';
import AuthProjectService from './abstract/AuthProjectService';
import PortfolioItemsService from './abstract/PortfolioItemsService';
import PortfolioService from './abstract/PortfolioService';
import WorksService from './abstract/WorksService';
import { AuthProjectServiceExpressApi } from './express/AuthProjectServiceExpressApi';
import PortfolioItemsServiceMock from './mock/PortfolioItemsServiceMock';
import PortfolioServiceMock from './mock/PortfolioServiceMock';
import WorksServiceMock from './mock/WorksServiceMock';

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials = true;

export interface Services {
  portfolioService: PortfolioService;
  worksService: WorksService;
  portfolioItemsService: PortfolioItemsService;
  authProjectService: AuthProjectService;
}

export const services: Services = {
  portfolioService: new PortfolioServiceMock(),
  worksService: new WorksServiceMock(),
  portfolioItemsService: new PortfolioItemsServiceMock(),
  authProjectService: new AuthProjectServiceExpressApi(),
};
