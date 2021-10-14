import React, { FC } from 'react';
import {
  useAuthProjectInputFields,
  useAuthProjectPageValidation,
  useAuthProjectSubmit,
  useWindowTitle,
} from '../../utils/hooks';
import FormWaveAnimation from '../portfolioItems/formWaveAnimation/FormWaveAnimation';

interface Props extends IWithError, IWithWarning, IWithSuccess {
  messages: IAuthProjectMessages;
  setEmailMessage: (
    messages: IAuthProjectMessages,
    emailMessage: IMessage,
  ) => void;
  setPasswordMessage: (
    messages: IAuthProjectMessages,
    passwordMessage: IMessage,
  ) => void;
  reset: () => void;

  validated: boolean;
  setValidated: (validated: boolean) => void;

  username: string;
  setUsername: (username: string) => void;

  password: string;
  setPassword: (password: string) => void;

  usage: AuthProjectUsage;
  setUsage: (usage: AuthProjectUsage) => void;

  currentUserInfo: string;
  setCurrentUserInfo: (info: string, role?: string) => void;
  currentUserRole?: string;
}

const AuthProject: FC<Props> = ({
  messages,
  setEmailMessage,
  setPasswordMessage,
  reset,

  validated,
  setValidated,

  username,
  setUsername,

  password,
  setPassword,

  usage,
  setUsage,

  currentUserInfo,
  setCurrentUserInfo,
  currentUserRole,

  pushError,
  pushWarning,
  pushSuccess,
}) => {
  useWindowTitle('Auth Project');

  const inputFields = useAuthProjectInputFields({
    messages,
    setEmailMessage,
    setPasswordMessage,

    username,
    setUsername,

    password,
    setPassword,
  });

  const validate = useAuthProjectPageValidation({
    messages,
    setValidated,
    pushError,
    pushWarning,
  });

  const { submit, logout } = useAuthProjectSubmit({
    username,
    password,
    reset,

    validated,
    setValidated,

    usage,
    setUsage,

    setCurrentUserInfo,

    pushError,
    pushSuccess,
  });

  return (
    <FormWaveAnimation
      inputFields={inputFields}
      validate={validate}
      submit={submit}
      usage={usage}
      setUsage={setUsage}
      currentUserInfo={currentUserInfo}
      currentUserRole={currentUserRole}
      logout={logout}
    />
  );
};

export default AuthProject;
