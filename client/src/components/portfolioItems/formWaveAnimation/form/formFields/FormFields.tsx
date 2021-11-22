import React, { FC, useContext } from 'react';
import { AuthProjectCtx } from '../../../../../utils/context';
import FormField from './formField/FormField';

const FormFields: FC = () => {
  const { inputFields } = useContext(AuthProjectCtx);

  return (
    <>
      {inputFields ? (
        inputFields.map((field) => (
          <FormField
            key={field.name}
            label={field.name}
            pattern={field.pattern}
            valid={field.valid}
            invalid={field.invalid}
            incorrect={field.incorrect}
            value={field.value}
            type={field.type}
            onChange={field.onChange}
          />
        ))
      ) : (
        <>
          <FormField type="text" label="Email" />

          <FormField type="password" label="Password" />
        </>
      )}
    </>
  );
};
export default FormFields;
