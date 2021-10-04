import { SECOND } from '../../utils/date';
import { delay } from '../../utils/delay';
import PortfolioItemsService from '../abstract/PortfolioItemsService';
import { database } from './database';

export default class PortfolioItemsServiceMock extends PortfolioItemsService {
  public async getExpandingCardsData(): Promise<IExpandingCards[]> {
    await delay(SECOND / 3);

    return database.expandingCards;
  }

  public async getProgressStepsData(): Promise<number[]> {
    await delay(SECOND / 3);

    return database.progressStepsData;
  }
}