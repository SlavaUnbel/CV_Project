/// <reference types="react-scripts" />

interface IWithError {
  pushError: (text: string | null) => void;
}

interface IWithWarning {
  pushWarning: (text: string | null) => void;
}

interface IWithSuccess {
  pushSuccess: (text: string | null) => void;
}

interface IWithInfo {
  pushInfo: (text: string | null) => void;
}

interface IWithLoading {
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
}

interface IHeader {
  phone: IHeaderCreds;
  email: IHeaderCreds;
  linkedin: IHeaderCreds;
}

interface IHeaderCreds {
  icon: JSX.Element;
  title: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

interface IPortfolio {
  id: number;
  imgSrc: string;
  videoSrc: string;
  title: string;
  link: string;
}

interface IWorks {
  id: number;
  iconSrc: string;
  title: string;
  description: string;
  link: string;
  imgSrc: string;
}

type Side = 'left' | 'right';
type Direction = 'up' | 'down';

interface IFormInput {
  name: string;
  valid: boolean;
  invalid: boolean;
  incorrect: boolean;
  pattern?: string;
  value?: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IMessages {
  nameMessage: IMessage;
  emailMessage: IMessage;
  subjectMessage: IMessage;
}

interface IAuthProjectMessages {
  emailMessage: IMessage;
  passwordMessage: IMessage;
}

interface IMessage {
  message: string | null;
  type: MessageType;
}

type MessageType = 'success' | 'error' | 'warning';

interface IExpandingCards {
  id: Id;
  title: string;
}

interface IRotatingNavigation {
  title: string;
  author: string;
  date: string;
  introText: string;
  images: string[];
  articleTitles: string[];
  articleParagraphs: string[];
}

interface ISplitLandingPage {
  title: string;
  link: string;
  side: Side;
  background: string;
}

interface IDadJokes {
  id: string;
  joke: string;
  status: number;
}

interface IFaqCollapse {
  id: number;
  title: string;
  answer: string;
}

type AuthProjectUsage = 'login' | 'registration' | 'loggedIn' | undefined;

interface IIncrementingCounter {
  twitter: IIncrementingCounterItem;
  youtube: IIncrementingCounterItem;
  facebook: IIncrementingCounterItem;
}

interface IIncrementingCounterItem {
  icon: JSX.Element;
  dataTarget: number;
  title: string;
}

interface IMovieApp {
  poster_path: string;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

interface IGithubUser {
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface IGithubRepo {
  id: number;
  name: string;
  html_url: string;
}

interface IPasswordGenerator {
  upper: IPasswordGeneratorOption
  lower: IPasswordGeneratorOption
  numbers: IPasswordGeneratorOption
  symbols: IPasswordGeneratorOption
}

interface IPasswordGeneratorOption {
  id: string;
  title: string;
}

interface INotesApp {
  id: number;
  note: string;
  editing: boolean;
}

interface ITestimonialsSwitcher {
  id: number;
  testimonial: string;
  avatar: string;
  username: string;
  role: string;
}

interface ILiveChat {
  room: string;
  content: ILiveChatMsg
}

interface ILiveChatMsg {
  id: string;
  username: string;
  message: string;
  time: string;
}

interface ITodoApp {
  id: number;
  todo: string;
  completed: boolean;
}