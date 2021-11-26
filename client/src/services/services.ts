import axios from 'axios';

import AuthProjectService from './abstract/AuthProjectService';
import NotesAppService from './abstract/NotesAppService';
import PomodoroTimerService from './abstract/PomodoroTimerService';
import PortfolioItemsService from './abstract/PortfolioItemsService';
import PortfolioService from './abstract/PortfolioService';
import TodoAppService from './abstract/TodoAppService';
import { AuthProjectServiceExpressApi } from './express/AuthProjectServiceExpressApi';
import { NotesAppServiceExpressApi } from './express/NotesAppServiceExpressApi';
import { TodoAppServiceExpressApi } from './express/TodoAppServiceExpressApi';
import PomodoroTimerServiceMock from './mock/PomodoroTimerServiceMock';
import PortfolioItemsServiceMock from './mock/PortfolioItemsServiceMock';
import PortfolioServiceMock from './mock/PortfolioServiceMock';

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
  portfolioService: new PortfolioServiceMock(),
  portfolioItemsService: new PortfolioItemsServiceMock(),
  authProjectService: new AuthProjectServiceExpressApi(),
  notesAppService: new NotesAppServiceExpressApi(),
  todoAppService: new TodoAppServiceExpressApi(),
  pomodoroTimerService: new PomodoroTimerServiceMock(),
};
