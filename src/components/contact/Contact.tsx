import React, { FC } from 'react';
import { shakeSrc } from '../../utils/constants';
import {
  useContactInputFields,
  useContactPageValidation,
  useSendEmail,
} from '../../utils/hooks';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import './contact.scss';
import InputField from './inputField/InputField';

interface Props extends IWithError, IWithWarning, IWithSuccess {
  nameMessage: IMessage;
  setNameMessage: (message: IMessage) => void;
  resetNameMessage: () => void;

  emailMessage: IMessage;
  setEmailMessage: (message: IMessage) => void;
  resetEmailMessage: () => void;

  subjectMessage: IMessage;
  setSubjectMessage: (message: IMessage) => void;
  resetSubjectMessage: () => void;

  validated: boolean;
  setValidated: (validated: boolean) => void;
}

const Contact: FC<Props> = ({
  nameMessage,
  setNameMessage,
  resetNameMessage,

  emailMessage,
  setEmailMessage,
  resetEmailMessage,

  subjectMessage,
  setSubjectMessage,
  resetSubjectMessage,

  validated,
  setValidated,

  pushError,
  pushWarning,
  pushSuccess,
}) => {
  const { inputFields, messages, reset } = useContactInputFields({
    nameMessage,
    setNameMessage,
    resetNameMessage,

    emailMessage,
    setEmailMessage,
    resetEmailMessage,

    subjectMessage,
    setSubjectMessage,
    resetSubjectMessage,
  });

  const validate = useContactPageValidation({
    messages,
    setValidated,
    pushError,
    pushWarning,
  });

  const sendEmail = useSendEmail({
    validated,
    setValidated,
    reset,
    pushSuccess,
  });

  return (
    <ComponentWrapper>
      <div className="contact">
        <div className="left">
          <img src={shakeSrc} alt="" />
        </div>

        <div className="right">
          <h2>Contact</h2>

          <form onSubmit={sendEmail} autoComplete="off">
            {inputFields.map((field, idx) => (
              <InputField
                key={idx}
                name={field.name}
                pattern={field.pattern}
                valid={field.valid}
                invalid={field.invalid}
                incorrect={field.incorrect}
                onChange={field.onChange}
              />
            ))}

            <textarea placeholder="Your message" name="message" />

            <button type="submit" onClick={validate}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Contact;
