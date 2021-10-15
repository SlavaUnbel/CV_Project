import React, { FC, FormEvent } from 'react';
import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import CurrentUserInfo from './currentUserInfo/CurrentUserInfo';
import './form-wave-animation.scss';
import FormFields from './formFields/FormFields';
import FormRegisterLink from './formRegisterLink/FormRegisterLink';
import FormSubmitButton from './formSubmitButton/FormSubmitButton';
import FormTitle from './formTitle/FormTitle';

interface Props {
  inputFields?: IFormInput[];
  validate?: () => void;
  submit?: (e: FormEvent<HTMLFormElement>) => void;

  usage?: AuthProjectUsage;
  setUsage?: (usage: AuthProjectUsage) => void;

  currentUserInfo?: string;
  currentUserRole?: string;
  role?: string;
  onRoleChange?: (role: string) => void;
  logout?: () => void;
}

const FormWaveAnimation: FC<Props> = ({
  inputFields,
  validate,
  submit,

  usage,
  setUsage,

  currentUserInfo,
  currentUserRole,
  role,
  onRoleChange,
  logout,
}) => {
  useWindowTitle('Form Wave Animation');

  return (
    <ComponentWrapper>
      <div className="form-wave-animation__container">
        <div className="form-wrapper">
          <FormTitle usage={usage} />

          {usage && usage !== 'registration' && (
            <CurrentUserInfo info={currentUserInfo} role={currentUserRole} />
          )}

          {usage === 'loggedIn' && (
            <button onClick={logout}>
              <p>Logout</p>
            </button>
          )}

          {usage !== 'loggedIn' && (
            <form onSubmit={submit} autoComplete="off">
              <FormFields inputFields={inputFields} />

              <FormSubmitButton usage={usage} onClick={validate} />

              <FormRegisterLink
                usage={usage}
                role={role}
                setUsage={setUsage}
                onRoleChange={onRoleChange}
              />
            </form>
          )}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default FormWaveAnimation;
