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

interface IWithLoading {
  loading?: boolean;
  setLoading: (loading: boolean) => void;
}

interface IHome {
  name: string;
  capabilities: string[];
  avatar: string;
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
  // githubLink: string; TODO
  imgSrc: string;
}

type SliderDirection = 'left' | 'right';

interface IFormInput {
  name: string;
  pattern: string;
  valid: boolean;
  invalid: boolean;
  incorrect: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IMessages {
  nameMessage: IMessage;
  emailMessage: IMessage;
  subjectMessage: IMessage;
}

interface IMessage {
  message: string | null;
  type: MessageType;
}

type MessageType = 'success' | 'error' | 'warning'

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

type SplitLandingSide = 'left' | 'right'

interface ISplitLandingPage {
  title: string;
  link: string;
  side: SplitLandingSide;
  background: string;
}