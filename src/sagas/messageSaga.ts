import { toast } from 'react-toastify';
import { takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-symbiote/types';
import { messageActions } from '../reducers/messageReducer';

export default function* messageSaga() {
  yield takeEvery(messageActions.message.error, errorHandler);
  yield takeEvery(messageActions.message.warning, warningHandler);
  yield takeEvery(messageActions.message.success, successHandler);
  yield takeEvery(messageActions.message.info, infoHandler);
}

function* errorHandler(action: Action<[text: string | null]>) {
  yield toast(action.payload, { type: 'error' });
}

function* warningHandler(action: Action<[text: string | null]>) {
  yield toast(action.payload, { type: 'warning' });
}

function* successHandler(action: Action<[text: string | null]>) {
  yield toast(action.payload, { type: 'success' });
}

function* infoHandler(action: Action<[text: string | null]>) {
  yield toast(action.payload, { type: 'info' });
}