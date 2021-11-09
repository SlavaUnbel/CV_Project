import { createSymbiote } from 'redux-symbiote';

export interface PortfolioItemsState {
  expandingCards: IExpandingCards[];

  rotatingNavigation: IRotatingNavigation;

  splitLandingPage: ISplitLandingPage[];

  dadJokes: IDadJokes;

  faqCollapse: IFaqCollapse[];

  animatedNavigation: string[];

  movies: IMovieApp[];

  githubUser: IGithubUser;
  githubRepos: IGithubRepo[];

  passwordGenerator: string;

  notes: INotesApp[]

  testimonialsSwitcher: ITestimonialsSwitcher;

  todos: ITodoApp[];
  newTodo: string;
  filteredTodos: ITodoApp[]
  todosStatus: string;
}

const initialPortfolioItemsState: PortfolioItemsState = {
  expandingCards: [],

  rotatingNavigation: {} as IRotatingNavigation,

  splitLandingPage: [],

  dadJokes: {} as IDadJokes,

  faqCollapse: [],

  animatedNavigation: [],

  movies: [],

  githubUser: {} as IGithubUser,
  githubRepos: [],

  passwordGenerator: '',

  notes: [],

  testimonialsSwitcher: {} as ITestimonialsSwitcher,

  todos: [],
  newTodo: '',
  filteredTodos: [],
  todosStatus: 'all'
};

const symbiotes = {
  expandingCards: {
    set: (state: PortfolioItemsState, expandingCards: IExpandingCards[]) => ({
      ...state,
      expandingCards,
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
  faqCollapse: {
    set: (state: PortfolioItemsState, faqCollapse: IFaqCollapse[]) => ({
      ...state,
      faqCollapse,
    }),
  },
  animatedNavigation: {
    set: (state: PortfolioItemsState, animatedNavigation: string[]) => ({
      ...state,
      animatedNavigation,
    }),
  },
  movies: {
    set: (state: PortfolioItemsState, movies: IMovieApp[]) => ({
      ...state,
      movies,
    }),
  },
  githubProfiles: {
    setUser: (state: PortfolioItemsState, githubUser: IGithubUser) => ({
      ...state,
      githubUser,
    }),
    setRepos: (state: PortfolioItemsState, githubRepos: IGithubRepo[]) => ({
      ...state,
      githubRepos,
    }),
  },
  passwordGenerator: {
    set: (state: PortfolioItemsState, passwordGenerator: string) => ({
      ...state,
      passwordGenerator,
    }),
  },
  notes: {
    set: (state: PortfolioItemsState, notes: INotesApp[]) => ({ ...state, notes }),
  },
  testimonialsSwitcher: {
    set: (
      state: PortfolioItemsState,
      testimonialsSwitcher: ITestimonialsSwitcher,
    ) => ({
      ...state,
      testimonialsSwitcher,
    }),
  },
  todos: {
    set: (state: PortfolioItemsState, todos: ITodoApp[]) => ({ ...state, todos }),
    add: (state: PortfolioItemsState, newTodo: string) => ({ ...state, newTodo }),
    filter: (state: PortfolioItemsState, filteredTodos: ITodoApp[]) => ({ ...state, filteredTodos }),
    setStatus: (state: PortfolioItemsState, todosStatus: string) => ({ ...state, todosStatus })
  }
};

export const {
  actions: portfolioItemsActions,
  reducer: portfolioItemsReducer,
} = createSymbiote(initialPortfolioItemsState, symbiotes);
