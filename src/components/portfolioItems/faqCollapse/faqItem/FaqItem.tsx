import { Close, KeyboardArrowDown } from '@material-ui/icons';
import React, { FC } from 'react';
import { useToggleFaqCollapse } from '../../../../utils/hooks';

interface Props {
  data: IFaqCollapse;
}

const FaqItem: FC<Props> = ({ data }) => {
  const { active, openCloseFaq } = useToggleFaqCollapse();

  return (
    <div className="faq-wrapper-container">
      <div className={`faq ${active ? 'active' : ''}`}>
        <div className="faq-head">
          <h3>{data.title}</h3>
          <button onClick={openCloseFaq}>
            <KeyboardArrowDown className="arrow" />
            <Close className="close" />
          </button>
        </div>

        <p>{data.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
