import { createSymbiote } from 'redux-symbiote';

export interface WorksState {
  worksData: IWorks[];
  current: number;
};

const initialWorksState: WorksState = {
  worksData: [],
  current: 0
};

const symbiotes = {
  worksData: {
    set: (state: WorksState, worksData: IWorks[]) => ({ ...state, worksData })
  },
  current: {
    change: (state: WorksState, current: number) => ({ ...state, current }),
  }
};

export const {
  actions: worksActions,
  reducer: worksReducer,
} = createSymbiote(initialWorksState, symbiotes);