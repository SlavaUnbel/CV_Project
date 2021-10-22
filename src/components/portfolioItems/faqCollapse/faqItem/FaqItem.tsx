import { Close, KeyboardArrowDown } from '@material-ui/icons';
import React, { FC } from 'react';
import { useToggleClass } from '../../../../utils/hooks';
import Button from '../../../utils/button/Button';

interface Props {
  data: IFaqCollapse;
}

const FaqItem: FC<Props> = ({ data }) => {
  const { newClass, toggleClass } = useToggleClass();

  return (
    <div className="faq-wrapper-container">
      <div className={`faq ${newClass ? 'active' : ''}`}>
        <div className="faq-head">
          <h3>{data.title}</h3>

          <Button onClick={toggleClass}>
            <KeyboardArrowDown className="arrow" />
            <Close className="close" />
          </Button>
        </div>

        <p>{data.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
