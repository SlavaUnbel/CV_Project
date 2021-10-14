import React, { FC, FormEvent } from 'react';
import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
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
}

const FormWaveAnimation: FC<Props> = ({
  inputFields,
  validate,
  submit,

  usage,
  setUsage,
}) => {
  useWindowTitle('Form Wave Animation');

  return (
    <ComponentWrapper>
      <div className="form-wave-animation__container">
        <div className="form-wrapper">
          <FormTitle usage={usage} />

          <form onSubmit={submit} autoComplete="off">
            <FormFields inputFields={inputFields} />

            <FormSubmitButton usage={usage} onClick={validate} />

            {usage !== 'registration' && (
              <FormRegisterLink setUsage={setUsage} />
            )}
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default FormWaveAnimation;
