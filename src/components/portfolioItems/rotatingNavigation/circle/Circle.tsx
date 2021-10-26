import { Close, Menu } from '@mui/icons-material';
import React, { FC, useContext } from 'react';
import { RotatingNavigationCtx } from '../../../../utils/context';
import Button from '../../../utils/button/Button';

const Circle: FC = () => {
  const { open, close } = useContext(RotatingNavigationCtx);

  return (
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
};

export default Circle;
