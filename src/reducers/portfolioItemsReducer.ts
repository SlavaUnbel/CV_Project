import { createSymbiote } from 'redux-symbiote';

export interface PortfolioItemsState {
  expandingCards: IExpandingCards[];
}

const initialPortfolioItemsState: PortfolioItemsState = {
  expandingCards: [],
};

const symbiotes = {
  expandingCards: {
    set: (state: PortfolioItemsState, expandingCards: IExpandingCards[]) => ({
      ...state,
      expandingCards,
    }),
  },
  isActive: {
    set: (state: PortfolioItemsState, isActive: boolean) => ({ ...state, isActive })
  }
};

export const {
  actions: portfolioItemsActions,
  reducer: portfolioItemsReducer,
} = createSymbiote(initialPortfolioItemsState, symbiotes);
