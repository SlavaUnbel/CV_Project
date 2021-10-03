import { createSymbiote } from 'redux-symbiote';

export interface WorksState {
  current: number;
};

const initialWorksState: WorksState = {
  current: 0
};

const symbiotes = {
  current: {
    change: (state: WorksState, current: number) => ({ ...state, current }),
  }
};

export const {
  actions: worksActions,
  reducer: worksReducer,
} = createSymbiote(initialWorksState, symbiotes);