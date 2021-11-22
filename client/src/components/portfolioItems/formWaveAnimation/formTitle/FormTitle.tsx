import React, { FC, useContext } from 'react';
import { AuthProjectCtx } from '../../../../utils/context';

const FormTitle: FC = () => {
  const { usage } = useContext(AuthProjectCtx);

  return (
    <h1>
      {usage === 'registration'
        ? 'Please Fill In To Register'
        : usage === 'loggedIn'
        ? 'Current Working Session'
        : 'Please Login'}
    </h1>
  );
};

export default FormTitle;
