import React, { FC } from 'react';
import { useFormWaveAnimationEffect } from '../../../../utils/hooks';

interface Props {
  type: string;
  label: string;
  required?: boolean;
}

const FormField: FC<Props> = ({ type, label, required }) => {
  const labelRef = useFormWaveAnimationEffect();

  return (
    <div className="form-control">
      <input type={type} required={required} id={label} />

      <label ref={labelRef} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default FormField;
