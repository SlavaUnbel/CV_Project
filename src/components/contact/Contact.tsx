import React, { FC } from 'react';
import { shakeSrc } from '../../utils/constants';
import {
  useContactInputFields,
  useContactPageValidation,
  useSendEmail,
  useWindowTitle,
} from '../../utils/hooks';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import './contact.scss';
import InputField from './inputField/InputField';

interface Props extends IWithError, IWithWarning, IWithSuccess {
  messages: IMessages;
  setNameMessage: (messages: IMessages, nameMessage: IMessage) => void;
  setEmailMessage: (messages: IMessages, emailMessage: IMessage) => void;
  setSubjectMessage: (messages: IMessages, subjectMessage: IMessage) => void;
  reset: () => void;

  validated: boolean;
  setValidated: (validated: boolean) => void;
}

const Contact: FC<Props> = ({
  messages,
  setNameMessage,
  setEmailMessage,
  setSubjectMessage,
  reset,

  validated,
  setValidated,

  pushError,
  pushWarning,
  pushSuccess,
}) => {
  useWindowTitle('Contact');

  const inputFields = useContactInputFields({
    messages,
    setNameMessage,
    setEmailMessage,
    setSubjectMessage,
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
    pushError,
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
