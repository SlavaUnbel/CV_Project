import React, { FC } from 'react';
import '../contact.scss';

interface Props {
  field: IFormInput;
}

const InputField: FC<Props> = ({ field }) => (
  <input
    placeholder={field.name}
    name={field.name.toLowerCase()}
    pattern={field.pattern}
    className={`${
      field.valid
        ? 'valid'
        : field.invalid
        ? 'invalid'
        : field.incorrect
        ? 'incorrect'
        : ''
    }`}
    onChange={(e) => field.onChange(e)}
  />
);

export default InputField;
