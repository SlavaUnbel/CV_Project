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

  const { register, login } = useAuthProjectSubmit({
    validated,
    username,
    password,
    setValidated,
    setUsage,
    reset,
    pushError,
    pushSuccess,
  });

  return (
    <FormWaveAnimation
      inputFields={inputFields}
      validate={validate}
      submit={
        usage === 'registration'
          ? register
          : usage === 'login'
          ? login
          : undefined
      }
      usage={usage}
      setUsage={setUsage}
    />
  );
};

export default AuthProject;
