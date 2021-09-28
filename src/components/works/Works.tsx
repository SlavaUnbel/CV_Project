import React, { FC, useEffect, useState } from 'react';
import { services } from '../../services/services';
import Loader from '../utils/loader/Loader';
import Arrow from './arrow/Arrow';
import WorkCard from './workCard/WorkCard';
import './works.scss';

const Works: FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IWorks[]>([]);
  const [current, setCurrent] = useState(0);

  const changeCurrent = (direction: SliderDirection) =>
    direction === 'left'
      ? setCurrent(current > 0 ? current - 1 : data.length - 1)
      : setCurrent(current < data.length - 1 ? current + 1 : 0);

  useEffect(() => {
    setLoading(true);

    services.worksService
      .getWorksData()
      .then(setData)
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="works" id="works">
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
  );
};

export default Works;
