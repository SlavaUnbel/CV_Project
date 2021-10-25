import {
  Add,
  AssignmentTurnedIn,
  ContentCopy,
  Remove,
} from '@mui/icons-material';
import React, { FC } from 'react';
import { useGeneratePassword, useWindowTitle } from '../../../utils/hooks';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './password-generator.scss';

interface Props extends IWithError, IWithWarning, IWithSuccess {
  passwordVal: string;
  setPasswordVal: (password: string) => void;
}

const PasswordGenerator: FC<Props> = ({
  passwordVal,
  setPasswordVal,

  pushError,
  pushWarning,
  pushSuccess,
}) => {
  useWindowTitle('Password Generator');

  const { refs, generate, copyPassword, subtract, add } = useGeneratePassword({
    setPasswordVal,
    pushError,
    pushWarning,
    pushSuccess,
  });

  return (
    <ComponentWrapper>
      <div className="password-generator__container">
        <div className="password-generator__wrapper">
          <h2>Password Generator</h2>

          <div className="result-container">
            <span className="result" ref={refs.resultRef} />

            <Button onClick={copyPassword}>
              {passwordVal === refs.resultRef.current?.innerText ? (
                <AssignmentTurnedIn />
              ) : (
                <ContentCopy />
              )}
            </Button>
          </div>

          <div className="settings">
            <div className="setting">
              <label htmlFor="length">Password Length</label>

              <div className="length">
                <Button onClick={subtract}>
                  <Remove className="icon" />
                </Button>

                <input
                  type="number"
                  id="length"
                  ref={refs.lengthRef}
                  onKeyPress={(e) => e.preventDefault()}
                />

                <Button onClick={add}>
                  <Add className="icon" />
                </Button>
              </div>
            </div>

            <div className="setting">
              <label htmlFor="uppercase">Include uppercase letters</label>

              <input type="checkbox" id="uppercase" ref={refs.upperRef} />
            </div>

            <div className="setting">
              <label htmlFor="lowercase">Include lowercase letters</label>

              <input type="checkbox" id="lowercase" ref={refs.lowerRef} />
            </div>

            <div className="setting">
              <label htmlFor="numbers">Include numbers</label>

              <input type="checkbox" id="numbers" ref={refs.numberRef} />
            </div>

            <div className="setting">
              <label htmlFor="symbols">Include symbols</label>

              <input type="checkbox" id="symbols" ref={refs.symbolRef} />
            </div>
          </div>

          <Button className="generate" onClick={generate}>
            Generate Password
          </Button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default PasswordGenerator;
