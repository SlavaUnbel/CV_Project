import React, { FC, useContext } from 'react';
import { AuthProjectCtx } from '../../../../../utils/context';
import Button from '../../../../utils/button/Button';

const FormSubmitButton: FC = () => {
  const { usage, validate } = useContext(AuthProjectCtx);

  return (
    <Button
      type="submit"
      onClick={
        usage
          ? validate
          : (e) => {
              e?.preventDefault();
              return;
            }
      }
    >
      {usage === 'registration' ? 'Register' : 'Login'}
    </Button>
  );
};

export default FormSubmitButton;
