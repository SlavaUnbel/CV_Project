import React, { FC, useContext } from 'react';
import { PasswordGeneratorCtx } from '../../../utils/context';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import './password-generator.scss';
import PasswordLength from './passwordLength/PasswordLength';
import Result from './result/Result';

const PasswordGenerator: FC = () => {
  const { generate, upperRef, lowerRef, numberRef, symbolRef } =
    useContext(PasswordGeneratorCtx);

  return (
    <ComponentWrapper>
      <div className="password-generator__container">
        <div className="password-generator__wrapper">
          <h2>Password Generator</h2>

          <Result />

          <div className="settings">
            <PasswordLength />

            <div className="setting">
              <label htmlFor="uppercase">Include uppercase letters</label>

              <input type="checkbox" id="uppercase" ref={upperRef} />
            </div>

            <div className="setting">
              <label htmlFor="lowercase">Include lowercase letters</label>

              <input type="checkbox" id="lowercase" ref={lowerRef} />
            </div>

            <div className="setting">
              <label htmlFor="numbers">Include numbers</label>

              <input type="checkbox" id="numbers" ref={numberRef} />
            </div>

            <div className="setting">
              <label htmlFor="symbols">Include symbols</label>

              <input type="checkbox" id="symbols" ref={symbolRef} />
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
