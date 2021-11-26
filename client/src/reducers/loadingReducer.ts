import { createSymbiote } from 'redux-symbiote';

export interface LoadingState {
  loading: boolean;
}

const initialLoadingState: LoadingState = {
  loading: false,
};

const symbiotes = {
  loading: {
    set: (state: LoadingState, loading: boolean) => ({ ...state, loading }),
  },
};

export const { actions: loadingActions, reducer: loadingReducer } =
  createSymbiote(initialLoadingState, symbiotes);
