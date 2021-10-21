import { createSymbiote } from 'redux-symbiote';

export interface PortfolioState {
  portfolioData: IPortfolio[];
  selected: number;
  pagesCount: number;
};

const initialPortfolioState: PortfolioState = {
  portfolioData: [],
  selected: 1,
  pagesCount: 0,
};

const symbiotes = {
  portfolioData: {
    set: (state: PortfolioState, portfolioData: IPortfolio[]) => ({ ...state, portfolioData })
  },
  selected: {
    set: (state: PortfolioState, selected: number) => ({ ...state, selected }),
  },
  pagesCount: {
    set: (state: PortfolioState, pagesCount: number) => ({ ...state, pagesCount })
  },
};

export const {
  actions: portfolioActions,
  reducer: portfolioReducer,
} = createSymbiote(initialPortfolioState, symbiotes);