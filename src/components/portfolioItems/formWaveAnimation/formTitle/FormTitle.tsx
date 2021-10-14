import React, { FC } from 'react';

interface Props {
  usage?: AuthProjectUsage;
}

const FormTitle: FC<Props> = ({ usage }) => (
  <h1>
    {usage === 'registration'
      ? 'Please Fill To Register'
      : usage === 'loggedIn'
      ? 'Current Working Session'
      : 'Please Login'}
  </h1>
);

export default FormTitle;
