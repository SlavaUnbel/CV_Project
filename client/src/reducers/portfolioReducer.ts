import { createSymbiote } from 'redux-symbiote';

export interface PortfolioState {
  data: IPortfolio[];
  filteredData: IPortfolio[];
  selected: number;
  pagesCount: number;
  itemsPerPage: number;
  criteria: string;
}

const initialPortfolioState: PortfolioState = {
  data: [],
  filteredData: [],
  selected: 1,
  pagesCount: 0,
  itemsPerPage: 6,
  criteria: "all",
};

const symbiotes = {
  data: {
    set: (state: PortfolioState, data: IPortfolio[]) => ({
      ...state,
      data,
    }),
  },
  filteredData: {
    set: (state: PortfolioState, filteredData: IPortfolio[]) => ({
      ...state,
      filteredData,
    }),
  },
  selected: {
    set: (state: PortfolioState, selected: number) => ({ ...state, selected }),
  },
  pagesCount: {
    set: (state: PortfolioState, pagesCount: number) => ({
      ...state,
      pagesCount,
    }),
  },
  itemsPerPage: {
    set: (state: PortfolioState, itemsPerPage: number) => ({
      ...state,
      itemsPerPage,
    }),
  },
  criteria: {
    set: (state: PortfolioState, criteria: string) => ({ ...state, criteria }),
  },
};

export const { actions: portfolioActions, reducer: portfolioReducer } =
  createSymbiote(initialPortfolioState, symbiotes);
