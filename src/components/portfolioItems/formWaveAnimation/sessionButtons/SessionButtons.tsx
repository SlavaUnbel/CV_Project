import React, { FC, useContext } from 'react';
import { AuthProjectCtx } from '../../../../utils/context';
import Button from '../../../utils/button/Button';

const SessionButtons: FC = () => {
  const { logout, checkAuth } = useContext(AuthProjectCtx);

  return (
    <>
      <Button onClick={logout}>Logout</Button>

      <Button style={{ marginTop: '1rem' }} onClick={checkAuth}>
        Check Authentication
      </Button>
    </>
  );
};

export default SessionButtons;
