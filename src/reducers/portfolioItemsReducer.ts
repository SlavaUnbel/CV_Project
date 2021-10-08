import { createSymbiote } from 'redux-symbiote';

export interface PortfolioItemsState {
  expandingCards: IExpandingCards[];

  progressStepsData: number[];
  progressStepsWidth: string;
  currentProgressStep: number;

  rotatingNavigation: IRotatingNavigation;

  splitLandingPage: ISplitLandingPage[];

  dadJokes: IDadJokes;
}

const initialPortfolioItemsState: PortfolioItemsState = {
  expandingCards: [],

  progressStepsData: [],
  progressStepsWidth: '0%',
  currentProgressStep: 1,

  rotatingNavigation: {} as IRotatingNavigation,

  splitLandingPage: [],

  dadJokes: {} as IDadJokes,
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
      rotatingNavigation: IRotatingNavigation,
    ) => ({ ...state, rotatingNavigation }),
  },
  splitLandingPage: {
    set: (
      state: PortfolioItemsState,
      splitLandingPage: ISplitLandingPage[],
    ) => ({ ...state, splitLandingPage }),
  },
  dadJokes: {
    set: (state: PortfolioItemsState, dadJokes: IDadJokes) => ({
      ...state,
      dadJokes,
    }),
  },
};

export const {
  actions: portfolioItemsActions,
  reducer: portfolioItemsReducer,
} = createSymbiote(initialPortfolioItemsState, symbiotes);
