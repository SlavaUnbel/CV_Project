import { githubUsersApi } from '../../utils/constants';
import { SECOND } from '../../utils/date';
import { delay } from '../../utils/hooks';
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

    return await fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
    }).then((data) => data.json());
  }

  public async getFaqCollapseData(): Promise<IFaqCollapse[]> {
    await delay(SECOND / 3);

    return database.faqCollapse;
  }

  public async getAnimatedNavigationData(): Promise<string[]> {
    await delay(SECOND / 3);

    return database.animatedNavigation;
  }

  public async getMovieAppDataFromApi(url: string): Promise<any> {
    await delay(SECOND / 3);

    return await fetch(url).then((data) => data.json());
  }

  public async getGithubProfilesUserDataFromApi(
    username: string,
  ): Promise<any> {
    await delay(SECOND / 3);

    return await fetch(`${githubUsersApi}${username}`).then((data) =>
      data.json(),
    );
  }

  public async getGithubProfilesReposDataFromApi(
    username: string,
  ): Promise<any> {
    await delay(SECOND / 3);

    return await fetch(`${githubUsersApi}${username}/repos?sort=created`).then(
      (data) => data.json(),
    );
  }
}
