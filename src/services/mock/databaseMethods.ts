import { avatarSrc, firstIconSrc, firstWorkSrc, secondIconSrc, secondWorkSrc, thirdIconSrc, thirdWorkSrc } from '../../utils/constants';

export const generatePortfolioData = (
  amount: number,
  id: number,
): IPortfolio[] => {
  return new Array(amount).fill(1).map((_, index) => {
    if (index) id++;

    return {
      id,
      imgSrc: avatarSrc,
      title: `Project ${id}`
    };
  });
};

export const generateWorksData = (
  amount: number,
  id: number,
): IWorks[] => {
  const icons = [firstIconSrc, secondIconSrc, thirdIconSrc];
  const titles = ['Web Design', 'Mobile App', 'Branding'];
  const images = [firstWorkSrc, secondWorkSrc, thirdWorkSrc];

  return new Array(amount).fill(1).map((_, index) => {
    if (index) id++;

    return {
      id,
      iconSrc: icons[id - 1],
      title: titles[id - 1],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ratione, possimus. Lorem ipsum dolor sit amet, elit. Ratione, possimus.',
      imgSrc: images[id - 1]
    };
  });
};