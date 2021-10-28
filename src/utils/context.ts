import { createContext, CSSProperties, FormEvent, RefObject } from 'react';

//Home Context
interface IHomeContext {
  textRef: RefObject<HTMLSpanElement>;
}
export const HomeCtx = createContext({} as IHomeContext);

//Header Context
interface IHeaderContext {
  spans: number[];
  creds: IHeader;
  menuOpen: boolean;
  openCloseMenu: (menuOpen: boolean) => void;
}
export const HeaderCtx = createContext({} as IHeaderContext);

//Menu Context
interface IMenuContext {
  options: string[];
  menuOpen: boolean;
  openCloseMenu: (menuOpen: boolean) => void;
}
export const MenuCtx = createContext({} as IMenuContext);

//Portfolio Context
interface IPortfolioContext extends IWithLoading, IWithError, IWithWarning {
  data: IPortfolio[];
  setData: (data: IPortfolio[]) => void;

  active: number;
  setActivePage: (active: number) => void;

  pagesCount: number;
  setPagesCount: (pagesCount: number) => void;

  wrapperStyle: CSSProperties;
}
export const PortfolioCtx = createContext({} as IPortfolioContext);

//Works Context
export interface IWorksContext extends IWithLoading, IWithError, IWithWarning {
  data: IWorks[];
  setData: (data: IWorks[]) => void;

  current: number;
  setCurrent: (current: number) => void;
}
export const WorksCtx = createContext({} as IWorksContext);

//Contact Context
interface IContactContext extends IWithError, IWithWarning, IWithSuccess {
  messages: IMessages;
  setNameMessage: (messages: IMessages, nameMessage: IMessage) => void;
  setEmailMessage: (messages: IMessages, emailMessage: IMessage) => void;
  setSubjectMessage: (messages: IMessages, subjectMessage: IMessage) => void;
  reset: () => void;

  validated: boolean;
  setValidated: (validated: boolean) => void;

  inputFields: IFormInput[];
  validate: () => void | void[];
  sendEmail: (e: any) => void;
}
export const ContactCtx = createContext({} as IContactContext);

//Expanding Cards Context
export interface IExpandingCardsContext
  extends IWithLoading,
  IWithError,
  IWithWarning {
  data: IExpandingCards[];
  setData: (data: IExpandingCards[]) => void;
}
export const ExpandingCardsCtx = createContext({} as IExpandingCardsContext);

//Rotating Navigation Context
interface IRotatingNavigationContext
  extends IWithLoading,
  IWithError,
  IWithWarning {
  data: IRotatingNavigation;
  setData: (data: IRotatingNavigation) => void;

  ref: RefObject<HTMLDivElement>;
  open: () => void;
  close: () => void;
}
export const RotatingNavigationCtx = createContext(
  {} as IRotatingNavigationContext,
);

//Split Landing Page Context
interface ISplitLandingPageContext
  extends IWithLoading,
  IWithError,
  IWithWarning {
  data: ISplitLandingPage[];
  setData: (data: ISplitLandingPage[]) => void;

  ref: RefObject<HTMLDivElement>;
  enterLeft: () => void;
  enterRight: () => void;
  leaveLeft: () => void;
  leaveRight: () => void;
  leaveBoth: () => void;
}
export const SplitLandingPageCtx = createContext(
  {} as ISplitLandingPageContext,
);

//Dad Jokes Context
interface IDadJokesContext extends IWithLoading, IWithError {
  data: IDadJokes;
  setData: (data: IDadJokes) => void;

  getJoke: () => void;
}
export const DadJokesCtx = createContext({} as IDadJokesContext);

//Faq Collapse Context
export interface IFaqCollapseContext
  extends IWithLoading,
  IWithError,
  IWithWarning {
  data: IFaqCollapse[];
  setData: (data: IFaqCollapse[]) => void;
}
export const FaqCollapseCtx = createContext({} as IFaqCollapseContext);

//Random Choice Context
interface IRandomChoicePickerContext {
  tagsRef: RefObject<HTMLDivElement>;
  areaRef: RefObject<HTMLTextAreaElement>;
  handleKeyUp: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  chooseRandomTag: () => void;
}
export const RandomChoicePickerCtx = createContext(
  {} as IRandomChoicePickerContext,
);

//Animated Navigation Context
interface IAnimatedNavigationContext
  extends IWithLoading,
  IWithError,
  IWithWarning {
  data: string[];
  setData: (data: string[]) => void;

  newClass: boolean;
  toggleClass: () => void;
}
export const AnimatedNavigationCtx = createContext(
  {} as IAnimatedNavigationContext,
);

//Incrementing Counter Context
interface IIntcrementingCounterContext {
  data: IIncrementingCounter;
}
export const IntcrementingCounterCtx = createContext(
  {} as IIntcrementingCounterContext,
);

//Movie App Context
interface IMovieAppContext extends IWithLoading, IWithError, IWithWarning {
  movies: IMovieApp[];
  setMovies: (movies: IMovieApp[]) => void;

  searchRef: RefObject<HTMLInputElement>;
  submit: (e: FormEvent<HTMLFormElement>) => void;
}
export const MovieAppCtx = createContext({} as IMovieAppContext);

//Drink Water Context
interface IDrinkWaterContext {
  litersRef: RefObject<HTMLSpanElement>;
  remainedRef: RefObject<HTMLDivElement>;
  percentageRef: RefObject<HTMLDivElement>;
  cupRef: RefObject<HTMLDivElement>;
  fillCup: (idx: number) => void;
}
export const DrinkWaterCtx = createContext({} as IDrinkWaterContext);

//Theme Clock Context
interface IThemeClockContext {
  hourRef: RefObject<HTMLDivElement>
  minuteRef: RefObject<HTMLDivElement>
  secondRef: RefObject<HTMLDivElement>
  timeRef: RefObject<HTMLDivElement>
  dateRef: RefObject<HTMLDivElement>

  newClass: boolean;
  toggleClass: () => void;
}
export const ThemeClockCtx = createContext({} as IThemeClockContext);

//Github Profiles Context
interface IGithubProfilesContext extends IWithLoading, IWithError, IWithWarning {
  user: IGithubUser;
  setGithubProfilesData: (user: any) => void;

  repos: IGithubRepo[];
  setGithubProfilesReposData: (repos: any[]) => void;

  noUserFound: boolean;
  searchForAUser: boolean;
  searchRef: RefObject<HTMLInputElement>
  submitSearch: (e: React.FormEvent<HTMLFormElement>) => void
}
export const GithubProfilesCtx = createContext({} as IGithubProfilesContext);

//Password Generator Context
interface IPasswordGeneratorContext extends IWithError, IWithWarning, IWithSuccess {
  passwordVal: string;
  setPasswordVal: (password: string) => void;

  lengthRef: RefObject<HTMLInputElement>;
  upperRef: RefObject<HTMLInputElement>;
  lowerRef: RefObject<HTMLInputElement>;
  numberRef: RefObject<HTMLInputElement>;
  symbolRef: RefObject<HTMLInputElement>;
  resultRef: RefObject<HTMLSpanElement>;
  generate: () => void;
  copyPassword: () => void;
  increase: () => void;
  decrease: () => void;
}
export const PasswordGeneratorCtx = createContext({} as IPasswordGeneratorContext);

//Auth Project Context
interface IAuthProjectContext extends IWithError, IWithWarning, IWithSuccess {
  messages: IAuthProjectMessages;
  setEmailMessage: (
    messages: IAuthProjectMessages,
    emailMessage: IMessage,
  ) => void;
  setPasswordMessage: (
    messages: IAuthProjectMessages,
    passwordMessage: IMessage,
  ) => void;
  reset: () => void;

  validated: boolean;
  setValidated: (validated: boolean) => void;

  username: string;
  setUsername: (username: string) => void;

  password: string;
  setPassword: (password: string) => void;

  usage: AuthProjectUsage;
  setUsage: (usage: AuthProjectUsage) => void;

  role: string;
  changeRole: (role: string) => void;

  currentUserInfo: string;
  setCurrentUserInfo: (info: string, role?: string) => void;
  currentUserRole?: string;
  setCurrentUserRole?: (role?: string) => void;

  inputFields: IFormInput[];
  validate: () => void | void[]
  submit?: (e: React.FormEvent<HTMLFormElement>) => void
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
}
export const AuthProjectCtx = createContext({} as IAuthProjectContext);

interface INotesAppContext extends IWithLoading, IWithError {
  notes: INotesApp[];
  setNotes: (notes: INotesApp[]) => void;
  addNote: () => void;
  editNote: (note: INotesApp) => void;
  removeNote: (id: number) => void;
}
export const NotesAppCtx = createContext({} as INotesAppContext)
