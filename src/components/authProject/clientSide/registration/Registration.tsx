import React, { FC } from 'react';
import { useWindowTitle } from '../../../../utils/hooks';
import FormWaveAnimation from '../../../portfolioItems/formWaveAnimation/FormWaveAnimation';

const Registration: FC = () => {
  useWindowTitle('Registration');

  return <FormWaveAnimation registration />;
};

export default Registration;
