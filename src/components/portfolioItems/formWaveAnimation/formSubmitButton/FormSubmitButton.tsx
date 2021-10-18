import React, { FC } from 'react';

interface Props {
  usage?: AuthProjectUsage;
  onClick?: () => void;
}

const FormSubmitButton: FC<Props> = ({ usage, onClick }) => (
  <button
    type="submit"
    onClick={
      usage
        ? onClick
        : (e) => {
            e.preventDefault();
            return;
          }
    }
  >
    <p>{usage === 'registration' ? 'Register' : 'Login'}</p>
  </button>
);

export default FormSubmitButton;
