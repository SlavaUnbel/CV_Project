import axios from 'axios';

import { SECOND } from '../../utils/date';
import { delay } from '../../utils/hooks';
import PortfolioService from '../abstract/PortfolioService';
import { database } from '../database';

export default class PortfolioServiceApi extends PortfolioService {
  public async getPortfolioList() {
    await delay(SECOND / 3);

    return await axios
      .get("/portfolio")
      .then((response) =>
        response.statusText === "OK" ? response.data : database.portfolioData
      );
  }
}
