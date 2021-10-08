import React, { FC } from 'react';
import { useWindowTitle } from '../../../utils/hooks';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './form-wave-animation.scss';
import FormField from './formField/FormField';

const FormWaveAnimation: FC = () => {
  useWindowTitle('Form Wave Animation');

  return (
    <ComponentWrapper>
      <div className="form-wave-animation__container">
        <div className="form-wrapper">
          <h1>Please Login</h1>

          <form autoComplete="off">
            <FormField type="text" label="Email" required />

            <FormField type="password" label="Password" required />

            <button>
              <p>Login</p>
            </button>

            <p className="text">
              Don't have an account?<a href="/">Register</a>
            </p>
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default FormWaveAnimation;
