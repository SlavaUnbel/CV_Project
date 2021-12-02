import { createSymbiote } from 'redux-symbiote';

export interface PortfolioItemsState {
  expandingCards: IExpandingCards[];

  rotatingNavigation: IRotatingNavigation;

  dadJokes: IDadJokes;

  faqCollapse: IFaqCollapse[];

  movies: IMovieApp[];

  githubUser: IGithubUser;
  githubRepos: IGithubRepo[];
  searchForAUser: boolean;
  noUserFound: boolean;

  passwordGenerator: string;

  notes: INotesApp[];

  testimonialsSwitcher: ITestimonialsSwitcher;

  todos: ITodoApp[];
  newTodo: string;
  filteredTodos: ITodoApp[];
  todosStatus: string;
}

const initialPortfolioItemsState: PortfolioItemsState = {
  expandingCards: [],

  rotatingNavigation: {} as IRotatingNavigation,

  dadJokes: {} as IDadJokes,

  faqCollapse: [],

  movies: [],

  githubUser: {} as IGithubUser,
  githubRepos: [],
  searchForAUser: true,
  noUserFound: false,

  passwordGenerator: "",

  notes: [],

  testimonialsSwitcher: {} as ITestimonialsSwitcher,

  todos: [],
  newTodo: "",
  filteredTodos: [],
  todosStatus: "all",
};

const symbiotes = {
  expandingCards: {
    get: (state: PortfolioItemsState) => ({ ...state }),
    set: (state: PortfolioItemsState, expandingCards: IExpandingCards[]) => ({
      ...state,
      expandingCards,
    }),
  },
  rotatingNavigation: {
    get: (state: PortfolioItemsState) => ({ ...state }),
    set: (
      state: PortfolioItemsState,
      rotatingNavigation: IRotatingNavigation
    ) => ({ ...state, rotatingNavigation }),
  },
  dadJokes: {
    get: (state: PortfolioItemsState) => ({ ...state }),
    set: (state: PortfolioItemsState, dadJokes: IDadJokes) => ({
      ...state,
      dadJokes,
    }),
  },
  faqCollapse: {
    get: (state: PortfolioItemsState) => ({ ...state }),
    set: (state: PortfolioItemsState, faqCollapse: IFaqCollapse[]) => ({
      ...state,
      faqCollapse,
    }),
  },
  movies: {
    get: (state: PortfolioItemsState, _url: string) => ({ ...state }),
    set: (state: PortfolioItemsState, movies: IMovieApp[]) => ({
      ...state,
      movies,
    }),
  },
  githubProfiles: {
    get: (state: PortfolioItemsState, _url: string) => ({ ...state }),
    setUser: (state: PortfolioItemsState, githubUser: IGithubUser) => ({
      ...state,
      githubUser,
    }),
    setRepos: (state: PortfolioItemsState, githubRepos: IGithubRepo[]) => ({
      ...state,
      githubRepos,
    }),
    setSearchForAUser: (
      state: PortfolioItemsState,
      searchForAUser: boolean
    ) => ({
      ...state,
      searchForAUser,
    }),
    setNotFound: (state: PortfolioItemsState, noUserFound: boolean) => ({
      ...state,
      noUserFound,
    }),
  },
  passwordGenerator: {
    set: (state: PortfolioItemsState, passwordGenerator: string) => ({
      ...state,
      passwordGenerator,
    }),
  },
  notes: {
    get: (state: PortfolioItemsState) => ({ ...state }),
    set: (state: PortfolioItemsState, notes: INotesApp[]) => ({
      ...state,
      notes,
    }),
    add: (state: PortfolioItemsState) => ({ ...state }),
    rename: (state: PortfolioItemsState, _note: INotesApp) => ({ ...state }),
    edit: (state: PortfolioItemsState, _note: INotesApp) => ({ ...state }),
    save: (state: PortfolioItemsState, _note: INotesApp) => ({ ...state }),
    remove: (state: PortfolioItemsState, _id: string) => ({ ...state }),
  },
  testimonialsSwitcher: {
    get: (state: PortfolioItemsState, _id: number) => ({ ...state }),
    set: (
      state: PortfolioItemsState,
      testimonialsSwitcher: ITestimonialsSwitcher
    ) => ({
      ...state,
      testimonialsSwitcher,
    }),
  },
  todos: {
    get: (state: PortfolioItemsState) => ({ ...state }),
    set: (state: PortfolioItemsState, todos: ITodoApp[]) => ({
      ...state,
      todos,
    }),
    add: (state: PortfolioItemsState, newTodo: string) => ({
      ...state,
      newTodo,
    }),
    complete: (state: PortfolioItemsState, _todo: ITodoApp) => ({ ...state }),
    remove: (state: PortfolioItemsState, _id: string) => ({ ...state }),
    filter: (state: PortfolioItemsState, filteredTodos: ITodoApp[]) => ({
      ...state,
      filteredTodos,
    }),
    setStatus: (state: PortfolioItemsState, todosStatus: string) => ({
      ...state,
      todosStatus,
    }),
  },
};

export const {
  actions: portfolioItemsActions,
  reducer: portfolioItemsReducer,
} = createSymbiote(initialPortfolioItemsState, symbiotes);
