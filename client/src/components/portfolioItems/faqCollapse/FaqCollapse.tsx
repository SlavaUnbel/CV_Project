import './faq-collapse.scss';

import React, { FC, useContext } from 'react';

import { FaqCollapseCtx } from '../../../utils/context';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import FaqItem from './faqItem/FaqItem';

const FaqCollapse: FC = () => {
  const { data } = useContext(FaqCollapseCtx);

  return (
    <ComponentWrapper>
      <LoaderWrapper>
        <div className="faq-collapse__container">
          <h1>Frequently Asked Questions</h1>

          {data.map((faq) => (
            <FaqItem key={faq._id} data={faq} />
          ))}
        </div>
      </LoaderWrapper>
    </ComponentWrapper>
  );
};

export default FaqCollapse;
