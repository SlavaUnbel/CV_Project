import React, { FC, useContext } from 'react';
import { AuthProjectCtx } from '../../../../utils/context';

const Form: FC = (props) => {
  const { submit } = useContext(AuthProjectCtx);

  return (
    <form onSubmit={submit} autoComplete="off">
      {props.children}
    </form>
  );
};

export default Form;
