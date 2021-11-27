import './contact.scss';

import React, { FC, useContext } from 'react';

import { contactSrc } from '../../utils/constants';
import { ContactCtx } from '../../utils/context';
import Button from '../utils/button/Button';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import InputField from './inputField/InputField';

const Contact: FC = () => {
  const { inputFields, sendEmail, validate, onWheel } = useContext(ContactCtx);

  return (
    <ComponentWrapper>
      <div className="contact" onWheel={onWheel}>
        <div className="left">
          <img src={contactSrc} alt="" />
        </div>

        <div className="right">
          <h2>Contact</h2>

          <form onSubmit={sendEmail} autoComplete="off">
            {inputFields.map((field, idx) => (
              <InputField key={idx} field={field} />
            ))}

            <textarea placeholder="Your message" name="message" />

            <Button type="submit" onClick={validate}>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Contact;
