import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { shakeSrc } from '../../utils/constants';
import {
  useContactInputFields,
  useContactPageValidation,
  useSendEmail,
} from '../../utils/hooks';
import './contact.scss';
import InputField from './inputField/InputField';
import MessageField from './messageField/MessageField';

const Contact: FC = () => {
  const {
    inputFields,
    nameMessage,
    emailMessage,
    subjectMessage,
    bodyMessage,
    onBodyMessageChange,
    reset,
  } = useContactInputFields();
  const messages = [nameMessage, emailMessage, subjectMessage, bodyMessage];

  const { validated, validate, setValidated } =
    useContactPageValidation(messages);
  const validationState = { validated, validate, setValidated, reset };

  const sendEmail = useSendEmail(validationState);

  console.log(bodyMessage);

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

          <MessageField message={bodyMessage} onChange={onBodyMessageChange} />

          <button type="submit" onClick={sendEmail}>
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer closeButton={false} />
    </div>
  );
};

export default Contact;
