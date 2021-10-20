import React, {
  FC,
  LegacyRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props {
  idx: number;
  percentageRef: RefObject<HTMLDivElement>;
  remainedRef: RefObject<HTMLDivElement>;
  litersRef: RefObject<HTMLSpanElement>;
}

const Cups: FC<Props> = ({ idx, percentageRef, remainedRef, litersRef }) => {
  const [cups, setCups] = useState<NodeListOf<HTMLDivElement>>();
  const cupRef: LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    setCups(
      cupRef.current?.parentElement?.childNodes as NodeListOf<HTMLDivElement>,
    );
  }, []);

  const fillCup = (idx: number) => {
    if (!cups) return;

    if (
      cups[idx].classList.contains('filled') &&
      !cups[idx].nextElementSibling?.classList.contains('filled')
    ) {
      idx--;
    }

    cups.forEach((cup, cupId) =>
      cupId <= idx
        ? cup.classList.add('filled')
        : cup.classList.remove('filled'),
    );

    fillMainCup();
  };

  const fillMainCup = () => {
    if (
      !percentageRef.current ||
      !remainedRef.current ||
      !litersRef.current ||
      !cups
    )
      return;

    const isMobile = window.innerWidth <= 800 && window.innerHeight <= 1000;
    const filledCups: HTMLDivElement[] = [];
    cups?.forEach(
      (cup) => cup.classList.contains('filled') && filledCups.push(cup),
    );

    if (filledCups.length === 0) {
      percentageRef.current.style.display = 'none';
      percentageRef.current.style.height = '0';
    } else {
      percentageRef.current.style.display = 'flex';
      percentageRef.current.style.height = `${
        (filledCups.length / cups.length) * (isMobile ? 16 : 24)
      }rem`;
      percentageRef.current.innerText = `${
        (filledCups.length / cups.length) * 100
      }%`;
    }

    if (filledCups.length === cups.length) {
      remainedRef.current.style.display = 'none';
      remainedRef.current.style.height = '0';
    } else {
      remainedRef.current.style.display = 'flex';

      if (cups.length - filledCups.length === 1 && isMobile) {
        remainedRef.current.style.flexFlow = 'row wrap';
      } else {
        remainedRef.current.style.flexFlow = 'column nowrap';
      }

      litersRef.current.innerText = `${2 - (250 * filledCups.length) / 1000}L`;
    }
  };

  return (
    <div className="cup cup-small" ref={cupRef} onClick={() => fillCup(idx)}>
      250 ml
    </div>
  );
};

export default Cups;
