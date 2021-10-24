import React, { FC } from 'react';
import { useFetchWorksData, useWindowTitle } from '../../utils/hooks';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../utils/loaderWrapper/LoaderWrapper';
import Arrow from './arrow/Arrow';
import WorkCard from './workCard/WorkCard';
import './works.scss';

interface Props extends IWithLoading, IWithError, IWithWarning {
  worksData: IWorks[];
  setWorksData: (worksData: IWorks[]) => void;

  current: number;
  setCurrent: (current: number) => void;
}

const Works: FC<Props> = ({
  worksData,
  setWorksData,
  setLoading,

  current,
  setCurrent,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Works');

  useFetchWorksData({ setWorksData, setLoading, pushError, pushWarning });

  return (
    <ComponentWrapper>
      <div className="works">
        <h1>Works</h1>

        <LoaderWrapper>
          <div
            className="slider"
            style={{ transform: `translateX(-${current * 100}vw)` }}
          >
            {worksData.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        </LoaderWrapper>

        <Arrow
          direction="left"
          disabled={current === 0}
          changeCurrent={() => setCurrent(current - 1)}
        />

        <Arrow
          direction="right"
          disabled={current === worksData.length - 1}
          changeCurrent={() => setCurrent(current + 1)}
        />
      </div>
    </ComponentWrapper>
  );
};

export default Works;
