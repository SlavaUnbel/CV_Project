import { createSymbiote } from 'redux-symbiote';

export interface PortfolioItemsState {
  expandingCards: IExpandingCards[];
  progressStepsData: number[];
  progressStepsWidth: string;
  currentProgressStep: number;
  rotatingNavigationData: IRotatingNavigation;
}

const initialPortfolioItemsState: PortfolioItemsState = {
  expandingCards: [],
  progressStepsData: [],
  progressStepsWidth: '0%',
  currentProgressStep: 1,
  rotatingNavigationData: {} as IRotatingNavigation,
};

const symbiotes = {
  expandingCards: {
    set: (state: PortfolioItemsState, expandingCards: IExpandingCards[]) => ({
      ...state,
      expandingCards,
    }),
  },
  progressSteps: {
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
  rotatingNavigation: {
    set: (
      state: PortfolioItemsState,
      rotatingNavigationData: IRotatingNavigation,
    ) => ({ ...state, rotatingNavigationData }),
  },
};

export const {
  actions: portfolioItemsActions,
  reducer: portfolioItemsReducer,
} = createSymbiote(initialPortfolioItemsState, symbiotes);
