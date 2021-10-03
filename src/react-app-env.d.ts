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

interface IHome {
  name: string;
  capabilities: string[];
  avatar: string;
}

interface IPortfolio {
  id: number;
  title: string;
  imgSrc: string;
  // link: string; TODO
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

interface IMessage {
  message: string | null;
  type: MessageType;
}

type MessageType = 'success' | 'error' | 'warning'