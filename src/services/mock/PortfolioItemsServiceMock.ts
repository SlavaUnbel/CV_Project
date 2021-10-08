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

  public async getRotatingNavigationData(): Promise<IRotatingNavigation> {
    await delay(SECOND / 3);

    return database.rotatingNavigation;
  }

  public async getSplitLandingPageData(): Promise<ISplitLandingPage[]> {
    await delay(SECOND / 3);

    return database.splitLandingPage;
  }

  public async getDadJokesDataFromApi(): Promise<IDadJokes> {
    await delay(SECOND / 3);
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      }
    });

    return await response.json();
  }
}