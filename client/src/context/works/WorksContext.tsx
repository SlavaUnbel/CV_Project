import React, { FC } from 'react';
import Works from '../../components/works/Works';
import { IWorksContext, WorksCtx } from '../../utils/context';
import { useFetchWorksData, useWindowTitle } from '../../utils/hooks';

const WorksContext: FC<IWorksContext> = ({
  data,
  setData,
  setLoading,

  current,
  setCurrent,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('Works');

  useFetchWorksData({ setData, setLoading, pushError, pushWarning });

  return (
    <WorksCtx.Provider
      value={{
        data,
        setData,
        setLoading,

        current,
        setCurrent,

        pushError,
        pushWarning,
      }}
    >
      <Works />
    </WorksCtx.Provider>
  );
};

export default WorksContext;
