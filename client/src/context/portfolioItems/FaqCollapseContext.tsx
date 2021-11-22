import React, { FC } from 'react';
import FaqCollapse from '../../components/portfolioItems/faqCollapse/FaqCollapse';
import { FaqCollapseCtx, IFaqCollapseContext } from '../../utils/context';
import { useFetchFaqCollapseData, useWindowTitle } from '../../utils/hooks';

const FaqCollapseContext: FC<IFaqCollapseContext> = ({
  data,
  setData,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('FAQ Collapse');

  useFetchFaqCollapseData({
    setData,
    setLoading,
    pushError,
    pushWarning,
  });

  return (
    <FaqCollapseCtx.Provider
      value={{
        data,
        setData,
        setLoading,

        pushError,
        pushWarning,
      }}
    >
      <FaqCollapse />
    </FaqCollapseCtx.Provider>
  );
};

export default FaqCollapseContext;
