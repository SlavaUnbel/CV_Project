import { call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-symbiote/types';

import { loadingActions } from '../reducers/loadingReducer';
import { messageActions } from '../reducers/messageReducer';
import { portfolioItemsActions } from '../reducers/portfolioItemsReducer';
import { services } from '../services/services';

export default function* todoAppWatcherSaga() {
  yield takeEvery(portfolioItemsActions.todos.get, getTodosWorker);
  yield takeEvery(portfolioItemsActions.todos.complete, completeTodoWorker);
  yield takeEvery(portfolioItemsActions.todos.remove, removeTodoWorker);
}

function* getTodosWorker() {
  yield put(loadingActions.loading.set(true));

  try {
    const payload = yield call(services.todoAppService.getTodos);
    yield put(portfolioItemsActions.todos.set(payload));
  } catch (error: any) {
    yield put(messageActions.message.error(error));
  } finally {
    yield put(loadingActions.loading.set(false));
  }
}

function* completeTodoWorker(todo: Action<[todo: ITodoApp]>) {
  try {
    const payload = yield call(
      services.todoAppService.completeTodo,
      todo.payload
    );
    yield put(portfolioItemsActions.todos.set(payload));
  } catch (error: any) {
    yield put(messageActions.message.error(error));
  }
}

function* removeTodoWorker(id: Action<[id: string]>) {
  try {
    const payload = yield call(services.todoAppService.removeTodo, id.payload);
    yield put(portfolioItemsActions.todos.set(payload));
  } catch (error: any) {
    yield put(messageActions.message.error(error));
  }
}
