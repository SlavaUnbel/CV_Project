import axios from 'axios';

import AuthProjectService from './abstract/AuthProjectService';
import NotesAppService from './abstract/NotesAppService';
import PomodoroTimerService from './abstract/PomodoroTimerService';
import PortfolioItemsService from './abstract/PortfolioItemsService';
import PortfolioService from './abstract/PortfolioService';
import TodoAppService from './abstract/TodoAppService';
import { AuthProjectServiceApi } from './api/AuthProjectServiceApi';
import { NotesAppServiceApi } from './api/NotesAppServiceApi';
import PomodoroTimerServiceApi from './api/PomodoroTimerServiceApi';
import PortfolioItemsServiceApi from './api/PortfolioItemsServiceApi';
import PortfolioServiceApi from './api/PortfolioServiceApi';
import { TodoAppServiceApi } from './api/TodoAppServiceApi';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

export interface Services {
  portfolioService: PortfolioService;
  portfolioItemsService: PortfolioItemsService;
  authProjectService: AuthProjectService;
  notesAppService: NotesAppService;
  todoAppService: TodoAppService;
  pomodoroTimerService: PomodoroTimerService;
}

export const services: Services = {
  portfolioService: new PortfolioServiceApi(),
  portfolioItemsService: new PortfolioItemsServiceApi(),
  authProjectService: new AuthProjectServiceApi(),
  notesAppService: new NotesAppServiceApi(),
  todoAppService: new TodoAppServiceApi(),
  pomodoroTimerService: new PomodoroTimerServiceApi(),
};
