import React, { FC } from 'react';
import FormField from './formField/FormField';

interface Props {
  inputFields?: IFormInput[];
}

const FormFields: FC<Props> = ({ inputFields }) => (
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

export default FormFields;
