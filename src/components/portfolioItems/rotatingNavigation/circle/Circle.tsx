import { Close, Menu } from '@material-ui/icons';
import React, { FC } from 'react';

interface Props {
  open: () => void;
  close: () => void;
}

const Circle: FC<Props> = ({ open, close }) => (
  <div className="circle-container">
    <div className="circle">
      <button className="close" onClick={close}>
        <Close />
      </button>

      <button className="open" onClick={open}>
        <Menu />
      </button>
    </div>
  </div>
);

export default Circle;
