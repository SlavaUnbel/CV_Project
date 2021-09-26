import { SECOND } from '../../utils/date';
import { delay } from '../../utils/delay';
import PortfolioService from '../abstract/PortfolioService';
import { database } from './database';

export default class PortfolioServiceMock extends PortfolioService {
  public async getPortfolioList(): Promise<IPortfolio[]> {
    await delay(SECOND);

    return database.portfolioData;
  }
}