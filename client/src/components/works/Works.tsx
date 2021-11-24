import './works.scss';

import React, { FC, useContext } from 'react';

import { WorksCtx } from '../../utils/context';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../utils/loaderWrapper/LoaderWrapper';
import Arrow from './arrow/Arrow';
import SliderWrapper from './sliderWrapper/SliderWrapper';
import WorkCard from './workCard/WorkCard';

const Works: FC = () => {
  const { data, current, setCurrent, onWheel } = useContext(WorksCtx);

  return (
    <ComponentWrapper>
      <div className="works" onWheel={onWheel}>
        <h1>Works</h1>

        <LoaderWrapper>
          <SliderWrapper>
            {data.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </SliderWrapper>
        </LoaderWrapper>

        <Arrow
          direction="left"
          disabled={current === 0}
          changeCurrent={() => setCurrent(current - 1)}
        />

        <Arrow
          direction="right"
          disabled={current === data.length - 1}
          changeCurrent={() => setCurrent(current + 1)}
        />
      </div>
    </ComponentWrapper>
  );
};

export default Works;
