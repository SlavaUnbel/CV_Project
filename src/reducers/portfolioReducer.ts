import { createSymbiote } from 'redux-symbiote';

export interface PortfolioState {
  selected: number;
};

const initialPortfolioState: PortfolioState = {
  selected: 0,
};

const symbiotes = {
  selected: {
    set: (state: PortfolioState, selected: number) => ({ ...state, selected }),
  },
};

export const {
  actions: portfolioActions,
  reducer: portfolioReducer,
} = createSymbiote(initialPortfolioState, symbiotes);