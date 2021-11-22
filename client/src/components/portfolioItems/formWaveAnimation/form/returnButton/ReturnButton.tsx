import React, { FC, useContext } from 'react';
import { AuthProjectCtx } from '../../../../../utils/context';
import Button from '../../../../utils/button/Button';

const ReturnButton: FC = () => {
  const { setUsage } = useContext(AuthProjectCtx);

  return (
    <Button
      style={{ marginTop: '1rem' }}
      onClick={() => setUsage && setUsage('login')}
    >
      Return To Login
    </Button>
  );
};

export default ReturnButton;
