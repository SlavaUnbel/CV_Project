/// <reference types="react-scripts" />

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
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IMessage {
  message: string | null;
  type: MessageType;
}

type MessageType = 'success' | 'error' | 'warning'