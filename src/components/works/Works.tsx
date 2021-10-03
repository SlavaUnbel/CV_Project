import React, { FC } from 'react';
import { useChangeCurrentWork, useFetchWorksData } from '../../utils/hooks';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import Loader from '../utils/loader/Loader';
import Arrow from './arrow/Arrow';
import WorkCard from './workCard/WorkCard';
import './works.scss';

interface Props {
  loading: boolean;
  setLoading: (loading: boolean) => void;

  current: number;
  setCurrent: (current: number) => void;

  pushError: (text: string) => void;
}

const Works: FC<Props> = ({
  loading,
  setLoading,

  current,
  setCurrent,

  pushError,
}) => {
  const data = useFetchWorksData({ setLoading, pushError });

  const changeCurrent = useChangeCurrentWork({ data, current, setCurrent });

  return (
    <ComponentWrapper>
      <div className="works">
        <h1>Works</h1>

        {!loading ? (
          <div
            className="slider"
            style={{ transform: `translateX(-${current * 100}vw)` }}
          >
            {data.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <Loader />
        )}

        <Arrow
          direction="left"
          disabled={current === 0}
          onClick={changeCurrent}
        />

        <Arrow
          direction="right"
          disabled={current === data.length - 1}
          onClick={changeCurrent}
        />
      </div>
    </ComponentWrapper>
  );
};

export default Works;
