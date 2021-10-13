import React, { FC } from 'react';

interface Props {
  setUsage?: (usage: AuthProjectUsage) => void;
}

const FormRegisterLink: FC<Props> = ({ setUsage }) => (
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
);

export default FormRegisterLink;
