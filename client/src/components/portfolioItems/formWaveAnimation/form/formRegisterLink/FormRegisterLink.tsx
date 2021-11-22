import { Checkbox } from '@mui/material';
import React, { FC, useContext } from 'react';
import { AuthProjectCtx } from '../../../../../utils/context';

const FormRegisterLink: FC = () => {
  const { usage, role, setUsage, changeRole } = useContext(AuthProjectCtx);

  return (
    <>
      {usage === 'login' || !usage ? (
        <p className="text">
          Don't have an account?
          <button
            type="button"
            className="link"
            onClick={() => setUsage && setUsage('registration')}
          >
            Register
          </button>
        </p>
      ) : usage === 'registration' ? (
        <p className="text">
          Press to be registered as Moderator
          <Checkbox
            value={role}
            className="checkbox"
            onChange={(e) => changeRole && changeRole(e.target.value)}
          />
        </p>
      ) : null}
    </>
  );
};

export default FormRegisterLink;
