import { SECOND } from '../../utils/date';
import { delay } from '../../utils/hooks';
import WorksService from '../abstract/WorksService';
import { database } from './database';

export default class WorksServiceMock extends WorksService {
  public async getWorksData(): Promise<IWorks[]> {
    await delay(SECOND / 3);

    return database.worksData
  }
}