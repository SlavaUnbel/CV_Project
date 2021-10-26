import { Add, Remove } from '@mui/icons-material';
import React, { FC, useContext } from 'react';
import { PasswordGeneratorCtx } from '../../../../utils/context';
import Button from '../../../utils/button/Button';

const PasswordLength: FC = () => {
  const { lengthRef, decrease, increase } = useContext(PasswordGeneratorCtx);

  return (
    <div className="setting">
      <label htmlFor="length">Password Length</label>

      <div className="length">
        <Button onClick={decrease}>
          <Remove className="icon" />
        </Button>

        <input type="number" id="length" ref={lengthRef} disabled />

        <Button onClick={increase}>
          <Add className="icon" />
        </Button>
      </div>
    </div>
  );
};

export default PasswordLength;
