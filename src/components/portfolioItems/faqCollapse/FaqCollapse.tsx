import React, { FC } from 'react';
import { useFetchFaqCollapseData, useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import './faq-collapse.scss';
import FaqItem from './faqItem/FaqItem';

interface Props extends IWithLoading, IWithError, IWithWarning {
  faqCollapseData: IFaqCollapse[];
  setFaqCollapseData: (data: IFaqCollapse[]) => void;
}

const FaqCollapse: FC<Props> = ({
  faqCollapseData,
  setFaqCollapseData,

  loading,
  setLoading,

  pushError,
  pushWarning,
}) => {
  useWindowTitle('FAQ Collapse');

  useFetchFaqCollapseData({
    setFaqCollapseData,
    setLoading,
    pushError,
    pushWarning,
  });

  return (
    <ComponentWrapper>
      <LoaderWrapper>
        <div className="faq-collapse__container">
          <h1>Frequently Asked Questions</h1>

          {faqCollapseData.map((faq) => (
            <FaqItem key={faq.id} data={faq} />
          ))}
        </div>
      </LoaderWrapper>
    </ComponentWrapper>
  );
};

export default FaqCollapse;
