import { SECOND } from '../../utils/date';
import { delay } from '../../utils/delay';
import WorksService from '../abstract/WorksService';
import { database } from './database';

export default class WorksServiceMock extends WorksService {
  public async getWorksData(): Promise<IWorks[]> {
    await delay(SECOND);

    return database.worksData
  }
}