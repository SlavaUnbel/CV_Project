import { SECOND } from '../../utils/date';
import { delay } from '../../utils/hooks';
import PomodoroTimerService from '../abstract/PomodoroTimerService';
import { database } from './database';

export default class PomodoroTimerServiceMock extends PomodoroTimerService {
  public async getMusicList(): Promise<string[]> {
    await delay(SECOND / 3);

    return database.pomodoroTimer;
  }
}