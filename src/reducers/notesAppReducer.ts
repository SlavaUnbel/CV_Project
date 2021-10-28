import { createSymbiote } from 'redux-symbiote';

export interface NotesAppState {
  notes: INotesApp[];
}

const initialAuthProjectState: NotesAppState = {
  notes: [],
};

const symbiotes = {
  notes: {
    set: (state: NotesAppState, notes: INotesApp[]) => ({ ...state, notes }),
  },
};

export const { actions: notesAppActions, reducer: notesAppReducer } =
  createSymbiote(initialAuthProjectState, symbiotes);
