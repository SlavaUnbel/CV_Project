import { toast } from 'react-toastify';
import { takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-symbiote/types';

import { messageActions } from '../reducers/messageReducer';

export default function* messageWatcherSaga() {
  yield takeEvery(messageActions.message.error, errorWorker);
  yield takeEvery(messageActions.message.warning, warningWorker);
  yield takeEvery(messageActions.message.success, successWorker);
  yield takeEvery(messageActions.message.info, infoWorker);
}

function* errorWorker(action: Action<[text: string | null]>) {
  yield toast(action.payload, { type: "error" });
}

function* warningWorker(action: Action<[text: string | null]>) {
  yield toast(action.payload, { type: "warning" });
}

function* successWorker(action: Action<[text: string | null]>) {
  yield toast(action.payload, { type: "success" });
}

function* infoWorker(action: Action<[text: string | null]>) {
  yield toast(action.payload, { type: "info" });
}
