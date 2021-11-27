import { IconButton } from '@mui/material';
import React, { FC } from 'react';

import { useToggleClass } from '../../../../utils/hooks';

interface Props {
  data: IFaqCollapse;
}

const FaqItem: FC<Props> = ({ data }) => {
  const { newClass, toggleClass } = useToggleClass();

  return (
    <div className="faq-wrapper-container">
      <div className={`faq ${newClass ? "active" : ""}`}>
        <div className="faq-head">
          <h3>{data.title}</h3>

          <IconButton
            onClick={toggleClass}
            className={`btn ${newClass ? "active" : ""}`}
          />
        </div>

        <p>{data.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
