import React, { FC } from 'react';

interface Props {
  usage?: AuthProjectUsage;
}

const FormTitle: FC<Props> = ({ usage }) => (
  <h1>
    {usage === 'registration' ? 'Please Fill To Register' : 'Please Login'}
  </h1>
);

export default FormTitle;
