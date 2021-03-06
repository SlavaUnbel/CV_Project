import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer, { IStore } from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancerArgs = [applyMiddleware(sagaMiddleware)];

// @ts-ignore
window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // @ts-ignore
  enhancerArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());

const store: IStore = createStore(rootReducer, compose(...enhancerArgs));

sagaMiddleware.run(rootSaga);

export default store;
