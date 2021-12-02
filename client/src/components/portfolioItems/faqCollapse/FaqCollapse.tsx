import './faq-collapse.scss';

import React, { FC, useEffect } from 'react';

import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import FaqItem from './faqItem/FaqItem';

interface Props {
  data: IFaqCollapse[];
  getData: () => void;
}

const FaqCollapse: FC<Props> = ({ data, getData }) => {
  useWindowTitle("FAQ Collapse");

  useEffect(() => getData(), [getData]);

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
