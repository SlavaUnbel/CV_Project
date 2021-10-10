import React, { FC } from 'react';
import { useWindowTitle } from '../../../utils/hooks';
import { authProjectRegistrationPath } from '../../../utils/route';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './form-wave-animation.scss';
import FormField from './formField/FormField';

interface Props {
  registration?: boolean;
}

const FormWaveAnimation: FC<Props> = ({ registration }) => {
  useWindowTitle('Form Wave Animation');

  return (
    <ComponentWrapper>
      <div className="form-wave-animation__container">
        <div className="form-wrapper">
          <h1>{registration ? 'Please Fill To Register' : 'Please Login'}</h1>

          <form autoComplete="off">
            <FormField type="text" label="Email" required />

            <FormField type="password" label="Password" required />

            <button>
              <p>{registration ? 'Register' : 'Login'}</p>
            </button>

            {!registration && (
              <p className="text">
                Don't have an account?
                <a href={authProjectRegistrationPath}>Register</a>
              </p>
            )}
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default FormWaveAnimation;
