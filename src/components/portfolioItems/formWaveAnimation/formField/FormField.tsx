import React, { ChangeEvent, FC } from 'react';
import { useFormWaveAnimationEffect } from '../../../../utils/hooks';

interface Props {
  label: string;
  value?: string;
  required?: boolean;
  pattern?: string;
  valid?: boolean;
  invalid?: boolean;
  incorrect?: boolean;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormField: FC<Props> = ({
  label,
  required,
  value,
  pattern,
  valid,
  invalid,
  incorrect,
  type,
  onChange,
}) => {
  const labelRef = useFormWaveAnimationEffect();

  return (
    <div className="form-control">
      <input
        type={type}
        required={required}
        id={label}
        pattern={pattern}
        className={`${
          valid ? 'valid' : invalid ? 'invalid' : incorrect ? 'incorrect' : ''
        }`}
        value={value}
        onChange={onChange}
      />

      <label ref={labelRef} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default FormField;
