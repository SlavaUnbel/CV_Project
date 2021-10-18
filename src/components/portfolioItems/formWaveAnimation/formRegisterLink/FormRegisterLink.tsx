import { Checkbox } from '@material-ui/core';
import React, { FC } from 'react';

interface Props {
  usage?: AuthProjectUsage;
  role?: string;
  setUsage?: (usage: AuthProjectUsage) => void;
  onRoleChange?: (role: string) => void;
}

const FormRegisterLink: FC<Props> = ({
  usage,
  role,
  setUsage,
  onRoleChange,
}) => (
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
          onChange={(e) => onRoleChange && onRoleChange(e.target.value)}
        />
      </p>
    ) : null}
  </>
);

export default FormRegisterLink;
