import React, { FC, useContext } from 'react';
import { AuthProjectCtx } from '../../../utils/context';
import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import CurrentUserInfo from './currentUserInfo/CurrentUserInfo';
import './form-wave-animation.scss';
import Form from './form/Form';
import FormFields from './form/formFields/FormFields';
import FormRegisterLink from './form/formRegisterLink/FormRegisterLink';
import FormSubmitButton from './form/formSubmitButton/FormSubmitButton';
import ReturnButton from './form/returnButton/ReturnButton';
import FormTitle from './formTitle/FormTitle';
import SessionButtons from './sessionButtons/SessionButtons';

const FormWaveAnimation: FC = () => {
  useWindowTitle('Form Wave Animation');

  const { usage } = useContext(AuthProjectCtx);

  return (
    <ComponentWrapper>
      <div className="form-wave-animation__container">
        <div className="form-wrapper">
          <FormTitle />

          {usage && usage !== 'registration' && <CurrentUserInfo />}

          {usage === 'loggedIn' && <SessionButtons />}

          {usage !== 'loggedIn' && (
            <Form>
              <FormFields />

              <FormSubmitButton />

              {usage === 'registration' && <ReturnButton />}

              <FormRegisterLink />
            </Form>
          )}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default FormWaveAnimation;
