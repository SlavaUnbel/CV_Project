import {
  avatarSrc,
  firstIconSrc,
  firstWorkSrc,
  secondIconSrc,
  secondWorkSrc,
  thirdIconSrc,
  thirdWorkSrc
} from '../../utils/constants';

export const getMenuOptions = (): string[] => {
  const options = ['Home', 'Portfolio', 'Works', 'Contact'];

  return new Array(options.length).fill(1).map((_, index) => options[index]);
};

export const getMenuIconSpans = (): number[] =>
  new Array(3).fill(1).map((_, index) => index + 1);

export const generatePortfolioData = (
  amount: number,
  id: number
): IPortfolio[] =>
  new Array(amount).fill(1).map((_, index) => {
    if (index) id++;

    return {
      id,
      imgSrc: avatarSrc,
      title: `Project ${id}`,
    };
  });

export const generateWorksData = (amount: number, id: number): IWorks[] => {
  const icons = [firstIconSrc, secondIconSrc, thirdIconSrc];
  const titles = ['Web Design', 'Mobile App', 'Branding'];
  const images = [firstWorkSrc, secondWorkSrc, thirdWorkSrc];

  return new Array(amount).fill(1).map((_, index) => {
    if (index) id++;

    return {
      id,
      iconSrc: icons[id - 1],
      title: titles[id - 1],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ratione, possimus. Lorem ipsum dolor sit amet, elit. Ratione, possimus.',
      imgSrc: images[id - 1],
    };
  });
};

export const getInitialMessagesForContactInputFields = (): IMessage[] => {
  const names = ['Name', 'Email', 'Subject', 'Message'];

  return new Array(4).fill(1).map((_, idx) => {
    return {
      message: `Please, fill in the "${names[idx]}" field`,
      type: 'error',
    };
  });
};
