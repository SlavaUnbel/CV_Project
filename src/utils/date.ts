export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const MONTH = WEEK * 30;

export const convertFromYYYYMMDD = (date: Date | string) => {
  const [year, month, day] = date.toString().split('-');
  return `${day}.${month}.${year}`;
};

export const getDateValueWithZeros = (value: number): string =>
  `${value < 10 ? '0' + value : value}`;
