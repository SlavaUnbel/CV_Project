import React, { ChangeEvent, FC } from 'react';
import '../contact.scss';

interface Props {
  name: string;
  pattern: string;
  valid: boolean;
  invalid: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<Props> = ({ name, pattern, valid, invalid, onChange }) => (
  <input
    placeholder={name}
    name={name.toLowerCase()}
    pattern={pattern}
    className={`${valid ? 'valid' : invalid ? 'invalid' : ''}`}
    onChange={(e) => onChange(e)}
  />
);

export default InputField;
