import { call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-symbiote/types';

import { loadingActions } from '../reducers/loadingReducer';
import { messageActions } from '../reducers/messageReducer';
import { portfolioItemsActions } from '../reducers/portfolioItemsReducer';
import { services } from '../services/services';

export default function* notesAppWatcherSaga() {
  yield takeEvery(portfolioItemsActions.notes.get, getNotesWorker);
  yield takeEvery(portfolioItemsActions.notes.add, addNoteWorker);
  yield takeEvery(portfolioItemsActions.notes.rename, renameNoteWorker);
  yield takeEvery(portfolioItemsActions.notes.edit, editNoteWorker);
  yield takeEvery(portfolioItemsActions.notes.save, saveNoteWorker);
  yield takeEvery(portfolioItemsActions.notes.remove, removeNoteWorker);
}

function* getNotesWorker() {
  yield notesRequestWorker(services.notesAppService.getNotes, true);
}

function* addNoteWorker() {
  yield notesRequestWorker(services.notesAppService.addNote);
}

function* renameNoteWorker(note: Action<[note: INotesApp]>) {
  yield notesRequestWorker(() =>
    services.notesAppService.renameNote(note.payload)
  );
}

function* editNoteWorker(note: Action<[note: INotesApp]>) {
  yield notesRequestWorker(() =>
    services.notesAppService.editNote(note.payload)
  );
}

function* saveNoteWorker(note: Action<[note: INotesApp]>) {
  yield notesRequestWorker(() =>
    services.notesAppService.saveNote(note.payload)
  );
  yield put(
    messageActions.message.success(
      `Successfully saved note: ${
        note.payload.title === "" ? "<No name provided>" : note.payload.title
      }`
    )
  );
}

function* removeNoteWorker(id: Action<[id: string]>) {
  yield notesRequestWorker(() =>
    services.notesAppService.removeNote(id.payload)
  );
}

function* notesRequestWorker(req: () => Promise<any>, withLoadState?: boolean) {
  yield withLoadState && put(loadingActions.loading.set(true));

  try {
    const payload: INotesApp[] = yield call(req);
    yield put(portfolioItemsActions.notes.set(payload));
  } catch (error: any) {
    yield put(messageActions.message.error(error));
  } finally {
    yield withLoadState && put(loadingActions.loading.set(false));
  }
}
