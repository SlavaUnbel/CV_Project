import { IEmojiData } from 'emoji-picker-react';
import React, { createContext, CSSProperties, FormEvent, RefObject } from 'react';
import { TimeProps } from 'react-countdown-circle-timer';
import { Socket } from 'socket.io-client';

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

//Home Context
interface IHomeContext extends IWithWheel {
  textRef: RefObject<HTMLSpanElement>;
}
export const HomeCtx = createContext({} as IHomeContext);

//Portfolio Context
interface IPortfolioContext
  extends IWithLoading,
    IWithError,
    IWithWarning,
    IWithWheel {
  data: IPortfolio[];
  setData: (data: IPortfolio[]) => void;

  filteredData: IPortfolio[];
  setFilteredData: (data: IPortfolio[]) => void;

  active: number;
  setActivePage: (active: number) => void;

  pagesCount: number;
  setPagesCount: (pagesCount: number) => void;

  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;

  criteria: string;
  setCriteria: (criteria: string) => void;

  wrapperStyle: CSSProperties;
}
export const PortfolioCtx = createContext({} as IPortfolioContext);

//Contact Context
interface IContactContext
  extends IWithError,
    IWithWarning,
    IWithSuccess,
    IWithWheel {
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

//Rotating Navigation Context
interface IRotatingNavigationContext {
  data: IRotatingNavigation;
  getData: () => void;

  ref: RefObject<HTMLDivElement>;
  open: () => void;
  close: () => void;
}
export const RotatingNavigationCtx = createContext(
  {} as IRotatingNavigationContext
);

//Random Choice Context
interface IRandomChoicePickerContext {
  disabled: boolean;
  tagsRef: RefObject<HTMLDivElement>;
  areaRef: RefObject<HTMLTextAreaElement>;
  handleKeyUp: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  chooseRandomTag: () => void;
}
export const RandomChoicePickerCtx = createContext(
  {} as IRandomChoicePickerContext
);

//Movie App Context
interface IMovieAppContext {
  movies: IMovieApp[];
  getMovies: (url: string) => void;

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
  hourRef: RefObject<HTMLDivElement>;
  minuteRef: RefObject<HTMLDivElement>;
  secondRef: RefObject<HTMLDivElement>;
  timeRef: RefObject<HTMLDivElement>;
  dateRef: RefObject<HTMLDivElement>;

  newClass: boolean;
  toggleClass: () => void;
}
export const ThemeClockCtx = createContext({} as IThemeClockContext);

//Github Profiles Context
interface IGithubProfilesContext extends IWithWarning {
  user: IGithubUser;
  repos: IGithubRepo[];
  getGithubProfile: (url: string) => void;

  searchForAUser: boolean;
  setSearchForAUser: (search: boolean) => void;

  noUserFound: boolean;
  setNoUserFound: (exists: boolean) => void;

  searchRef: RefObject<HTMLInputElement>;
  submitSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}
export const GithubProfilesCtx = createContext({} as IGithubProfilesContext);

//Password Generator Context
interface IPasswordGeneratorContext
  extends IWithError,
    IWithWarning,
    IWithSuccess {
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
export const PasswordGeneratorCtx = createContext(
  {} as IPasswordGeneratorContext
);

//Auth Project Context
interface IAuthProjectContext extends IWithError, IWithWarning, IWithSuccess {
  messages: IAuthProjectMessages;
  setEmailMessage: (
    messages: IAuthProjectMessages,
    emailMessage: IMessage
  ) => void;
  setPasswordMessage: (
    messages: IAuthProjectMessages,
    passwordMessage: IMessage
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
  validate: () => void | void[];
  submit?: (e: React.FormEvent<HTMLFormElement>) => void;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}
export const AuthProjectCtx = createContext({} as IAuthProjectContext);

//Notes App Context
export interface INotesAppContext {
  notes: INotesApp[];
  getNotes: () => void;
  addNote: () => void;
  renameNote: (note: INotesApp) => void;
  editNote: (note: INotesApp) => void;
  saveNote: (note: INotesApp) => void;
  removeNote: (id: string) => void;
}
export const NotesAppCtx = createContext({} as INotesAppContext);

//Live Chat Context
interface ILiveChatContext {
  socket: Socket<any, any>;

  username: string;
  setUsername: (username: string) => void;

  room: string;
  setRoom: (room: string) => void;

  chatShown: boolean;
  setChatShown: (shown: boolean) => void;

  messageList: ILiveChat[];
  setMessageList: (list: ILiveChat[]) => void;

  roomList: string[];
  setRoomList: (list: string[]) => void;

  roomChoice: boolean;
  setRoomChoice: (choice: boolean) => void;

  joinRoom: () => void;
  leaveRoom: () => void;
}
export const LiveChatCtx = createContext({} as ILiveChatContext);

interface ILiveChatRoomContext {
  emojiActive: boolean;
  setEmojiActive: (active: boolean) => void;
  onEmojiClick: (
    e: React.MouseEvent<Element, MouseEvent>,
    emojiObj: IEmojiData
  ) => void;

  message: string;
  setMessage: (message: string) => void;
  getUsername: string;
  sendMessage: () => void;
}
export const LiveChatRoomCtx = createContext({} as ILiveChatRoomContext);

//Todo App Context
interface ITodoAppContext {
  todos: ITodoApp[];
  addTodo: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  completeTodo: (todo: ITodoApp) => void;
  removeTodo: (id: string) => void;

  inputValue: string;
  setInputValue: (value: string) => void;

  filteredTodos: ITodoApp[];
  setFilteredTodos: (todos: ITodoApp[]) => void;

  status: string;
  setStatus: (status: string) => void;
}
export const TodoAppCtx = createContext({} as ITodoAppContext);

//Pomodoro Timer Context
interface IPomodoroTimerContext extends IWithError, IWithWarning, IWithSuccess {
  pomodoro: number;

  newTimer: IPomodoroTimer;
  setNewTimer: (timer: IPomodoroTimer) => void;
  handleSubmit: (e: any) => void;

  executing: IPomodoroTimer;
  updateExecute: (updatedSettings: IPomodoroTimer) => void;

  timerDisabled: boolean;
  setTimerDisabled: (disabled: boolean) => void;

  startAnimate: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;

  settingBtn: () => void;
  setCurrentTimer: (activeState: string) => void;
  changeTimer: (label: string) => void;

  countdown: (timer: TimeProps) => void;

  playerOpened: boolean;
  setPlayerOpened: (opened: boolean) => void;

  audio: string | null;
  setAudio: (audio: string | null) => void;
  audioList: string[];
  setAudioList: (list: string[]) => void;
  isPlaying: boolean;
}
export const PomodoroTimerCtx = createContext({} as IPomodoroTimerContext);

//Audio Player Context
interface IAudioPlayerContext {
  wavesurferContainer: RefObject<HTMLDivElement>;

  currentTime: number;
  duration: number;
  presentSeconds: (seconds: number) => string;

  volume: number;
  changeVolume: (volume: number) => void;
  changeMute: () => void;

  isPlaying: boolean;
  repeat?: boolean;
  setRepeat?: (repeat: boolean) => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
  skipPrevious: () => void;
  skipNext: () => void;
  seekBack: () => void;
  seekForward: () => void;

  playbackRate: number;
  changePlaybackRate: (rate: number) => void;
}
export const AudioPlayerCtx = createContext({} as IAudioPlayerContext);
