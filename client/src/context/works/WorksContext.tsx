import React, { FC } from 'react';

import Works from '../../components/works/Works';
import { IWorksContext, WorksCtx } from '../../utils/context';
import { useFetchWorksData, useMouseWheel, useRedirectToItem, useScrollRedirect, useWindowTitle } from '../../utils/hooks';
import { contactPath, portfolioPath } from '../../utils/route';

const WorksContext: FC<IWorksContext> = ({
  data,
  setData,
  setLoading,

  current,
  setCurrent,

  pushError,
  pushWarning,
}) => {
  useWindowTitle("Works");

  useFetchWorksData({ setData, setLoading, pushError, pushWarning });

  const paths = {
    goToPortfolio: useRedirectToItem(portfolioPath),
    goToContact: useRedirectToItem(contactPath),
  };
  const wheelDirection = useMouseWheel();
  const onWheel = useScrollRedirect(
    wheelDirection,
    paths.goToPortfolio,
    paths.goToContact
  );

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

        onWheel,
      }}
    >
      <Works />
    </WorksCtx.Provider>
  );
};

export default WorksContext;
