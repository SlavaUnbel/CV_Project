import { Close, Menu } from '@material-ui/icons';
import React, { FC } from 'react';
import Button from '../../../utils/button/Button';

interface Props {
  open: () => void;
  close: () => void;
}

const Circle: FC<Props> = ({ open, close }) => (
  <div className="circle-container">
    <div className="circle">
      <Button className="close" onClick={close}>
        <Close />
      </Button>

      <Button className="open" onClick={open}>
        <Menu />
      </Button>
    </div>
  </div>
);

export default Circle;
