import React, { FC } from 'react';
import PasswordGenerator from '../../components/portfolioItems/passwordGenerator/PasswordGenerator';
import { PasswordGeneratorCtx } from '../../utils/context';
import { useGeneratePassword, useWindowTitle } from '../../utils/hooks';

interface Props extends IWithError, IWithWarning, IWithSuccess {
  passwordVal: string;
  setPasswordVal: (password: string) => void;
}

const PasswordGeneratorContext: FC<Props> = ({
  passwordVal,
  setPasswordVal,

  pushError,
  pushWarning,
  pushSuccess,
}) => {
  useWindowTitle('Password Generator');

  const {
    lengthRef,
    upperRef,
    lowerRef,
    numberRef,
    symbolRef,
    resultRef,
    generate,
    copyPassword,
    increase,
    decrease,
  } = useGeneratePassword({
    setPasswordVal,
    pushError,
    pushWarning,
    pushSuccess,
  });

  return (
    <PasswordGeneratorCtx.Provider
      value={{
        passwordVal,
        setPasswordVal,

        pushError,
        pushWarning,
        pushSuccess,

        lengthRef,
        upperRef,
        lowerRef,
        numberRef,
        symbolRef,
        resultRef,
        generate,
        copyPassword,
        increase,
        decrease,
      }}
    >
      <PasswordGenerator />
    </PasswordGeneratorCtx.Provider>
  );
};

export default PasswordGeneratorContext;
