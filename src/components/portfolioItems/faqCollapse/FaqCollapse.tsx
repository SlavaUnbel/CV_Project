import React, { FC, useContext } from 'react';
import { FaqCollapseCtx } from '../../../utils/context';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import './faq-collapse.scss';
import FaqItem from './faqItem/FaqItem';

const FaqCollapse: FC = () => {
  const { data } = useContext(FaqCollapseCtx);

  return (
    <ComponentWrapper>
      <LoaderWrapper>
        <div className="faq-collapse__container">
          <h1>Frequently Asked Questions</h1>

          {data.map((faq) => (
            <FaqItem key={faq.id} data={faq} />
          ))}
        </div>
      </LoaderWrapper>
    </ComponentWrapper>
  );
};

export default FaqCollapse;
