import axios from 'axios';

import { SECOND } from '../../utils/date';
import { delay } from '../../utils/hooks';
import TodoAppService from '../abstract/TodoAppService';

export class TodoAppServiceExpressApi extends TodoAppService {
  public async getTodos() {
    await delay(SECOND / 3);

    return await axios.get("/todoApp/get").then((response) => response.data);
  }

  public async addTodo(todo: string) {
    return await axios
      .post("/todoApp/add", { todo })
      .then((response) => response.data);
  }

  public async completeTodo(todo: ITodoApp) {
    return await axios
      .put(`/todoApp/complete/${todo._id}`, { todo })
      .then((response) => response.data);
  }

  public async removeTodo(id: string) {
    return await axios
      .delete(`/todoApp/remove/${id}`)
      .then((response) => response.data);
  }
}
