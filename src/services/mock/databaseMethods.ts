import { avatarSrc } from '../../utils/constants';

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