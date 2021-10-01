import React, { FC } from 'react';
import { shakeSrc } from '../../utils/constants';
import {
  useContactInputFields,
  useContactPageValidation,
  useSendEmail,
} from '../../utils/hooks';
import ToastContainer from '../utils/toastContainer/ToastContainer';
import './contact.scss';
import InputField from './inputField/InputField';

const Contact: FC = () => {
  const { inputFields, messages, reset } = useContactInputFields();

  const { validated, validate, setValidated } =
    useContactPageValidation(messages);

  const validationState = { validated, setValidated, reset };

  const sendEmail = useSendEmail(validationState);

  return (
    <div className="contact" id="contact">
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
              valid={messages[idx].type === 'success'}
              invalid={messages[idx].type === 'error'}
              onChange={field.onChange}
            />
          ))}

          <textarea placeholder="Your message" name="message" />

          <button type="submit" onClick={validate}>
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
