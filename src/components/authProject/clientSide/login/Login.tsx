import React, { FC } from 'react';
import { useWindowTitle } from '../../../../utils/hooks';
import FormWaveAnimation from '../../../portfolioItems/formWaveAnimation/FormWaveAnimation';

const Login: FC = () => {
  useWindowTitle('Login');

  return <FormWaveAnimation />;
};

export default Login;
