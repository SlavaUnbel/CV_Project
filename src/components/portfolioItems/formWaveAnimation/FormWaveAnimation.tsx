import React, { FC, FormEvent } from 'react';
import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './form-wave-animation.scss';
import FormField from './formField/FormField';
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
            {inputFields ? (
              inputFields.map((field, idx) => (
                <FormField
                  key={idx}
                  label={field.name}
                  pattern={field.pattern}
                  valid={field.valid}
                  invalid={field.invalid}
                  incorrect={field.incorrect}
                  value={field.value}
                  type={field.type}
                  onChange={field.onChange}
                />
              ))
            ) : (
              <>
                <FormField type="text" label="Email" />

                <FormField type="password" label="Password" />
              </>
            )}

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
