import React, { FC } from 'react';
import Button from '../../../utils/button/Button';

interface Props {
  usage?: AuthProjectUsage;
  onClick?: () => void;
}

const FormSubmitButton: FC<Props> = ({ usage, onClick }) => (
  <Button
    type="submit"
    onClick={
      usage
        ? onClick
        : (e) => {
            e?.preventDefault();
            return;
          }
    }
  >
    {usage === 'registration' ? 'Register' : 'Login'}
  </Button>
);

export default FormSubmitButton;
