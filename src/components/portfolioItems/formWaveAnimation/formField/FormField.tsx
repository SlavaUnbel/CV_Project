import React, { FC } from 'react';
import { useFormWaveAnimationEffect } from '../../../../utils/hooks';

interface Props {
  type: string;
  label: string;
  required?: boolean;
}

const FormField: FC<Props> = ({ type, label, required }) => {
  const ref = useFormWaveAnimationEffect();

  return (
    <div className="form-control">
      <input type={type} required={required} id={label} />

      <label ref={ref} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default FormField;
