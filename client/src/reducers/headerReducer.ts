import { createSymbiote } from 'redux-symbiote';

export interface HeaderState {
  menuOpen: boolean;
}

const initialHeaderState: HeaderState = {
  menuOpen: false,
};

const symbiotes = {
  menuOpen: {
    set: (state: HeaderState, menuOpen: boolean) => ({ ...state, menuOpen }),
  },
};

export const { actions: headerActions, reducer: headerReducer } =
  createSymbiote(initialHeaderState, symbiotes);
