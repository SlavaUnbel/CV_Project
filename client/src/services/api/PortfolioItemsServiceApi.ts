import axios from 'axios';

import { dadJokesApi, githubUsersApi } from '../../utils/constants';
import { SECOND } from '../../utils/date';
import { delay } from '../../utils/hooks';
import PortfolioItemsService from '../abstract/PortfolioItemsService';
import { database } from '../database';

export default class PortfolioItemsServiceApi extends PortfolioItemsService {
  public async getExpandingCardsData(): Promise<IExpandingCards[]> {
    await delay(SECOND / 3);

    return await axios
      .get("/portfolioItem/expanding-cards")
      .then((response) =>
        response.statusText === "OK" ? response.data : database.expandingCards
      );
  }

  public async getRotatingNavigationData(): Promise<IRotatingNavigation[]> {
    await delay(SECOND / 3);

    return await axios
      .get("/portfolioItem/rotating-navigation")
      .then((response) =>
        response.statusText === "OK"
          ? response.data
          : database.rotatingNavigation
      );
  }

  public async getDadJokesDataFromApi(): Promise<IDadJokes> {
    await delay(SECOND / 3);

    return await fetch(`${dadJokesApi}`, {
      headers: {
        Accept: "application/json",
      },
    }).then((data) => data.json());
  }

  public async getFaqCollapseData(): Promise<IFaqCollapse[]> {
    await delay(SECOND / 3);

    return await axios
      .get("/portfolioItem/faq-collapse")
      .then((response) =>
        response.statusText === "OK" ? response.data : database.faqCollapse
      );
  }

  public async getMovieAppDataFromApi(url: string): Promise<any> {
    await delay(SECOND / 3);

    return await fetch(url).then((data) => data.json());
  }

  public async getGithubProfilesUserDataFromApi(
    username: string
  ): Promise<any> {
    await delay(SECOND / 3);

    return await fetch(`${githubUsersApi}${username}`).then((data) =>
      data.json()
    );
  }

  public async getGithubProfilesReposDataFromApi(
    username: string
  ): Promise<any> {
    await delay(SECOND / 3);

    return await fetch(`${githubUsersApi}${username}/repos?sort=created`).then(
      (data) => data.json()
    );
  }

  public async getTestimonialsSwitcherDataById(
    id: number
  ): Promise<ITestimonialsSwitcher> {
    await delay(SECOND / 3);

    return await axios
      .get("/portfolioItem/testimonials-switcher")
      .then((response) =>
        response.statusText === "OK"
          ? response.data[id]
          : database.testimonialsSwitcher[id]
      );
  }
}
