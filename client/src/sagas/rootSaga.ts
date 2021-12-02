import { all } from 'redux-saga/effects';

import messageWatcherSaga from './messageSaga';
import notesAppWatcherSaga from './notesAppSaga';
import portfolioItemsWatcherSaga from './portfolioItemsSaga';
import todoAppWatcherSaga from './todoAppSaga';

export default function* rootSaga() {
  yield all([
    messageWatcherSaga(),
    portfolioItemsWatcherSaga(),
    notesAppWatcherSaga(),
    todoAppWatcherSaga(),
  ]);
}
