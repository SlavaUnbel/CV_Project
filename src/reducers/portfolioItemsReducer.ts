import { createSymbiote } from 'redux-symbiote';

export interface PortfolioItemsState {
  expandingCards: IExpandingCards[];
  progressStepsData: number[];
  progressStepsWidth: string;
  currentProgressStep: number;
}

const initialPortfolioItemsState: PortfolioItemsState = {
  expandingCards: [],
  progressStepsData: [],
  progressStepsWidth: '0%',
  currentProgressStep: 1,
};

const symbiotes = {
  expandingCards: {
    set: (state: PortfolioItemsState, expandingCards: IExpandingCards[]) => ({
      ...state,
      expandingCards,
    }),
  },
  progressStepsData: {
    set: (state: PortfolioItemsState, progressStepsData: number[]) => ({
      ...state,
      progressStepsData,
    }),
    setWidth: (state: PortfolioItemsState, progressStepsWidth: string) => ({
      ...state,
      progressStepsWidth,
    }),
    setCurrent: (state: PortfolioItemsState, currentProgressStep: number) => ({
      ...state,
      currentProgressStep,
    }),
  },
};

export const {
  actions: portfolioItemsActions,
  reducer: portfolioItemsReducer,
} = createSymbiote(initialPortfolioItemsState, symbiotes);
