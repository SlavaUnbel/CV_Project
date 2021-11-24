import React, { FC, useContext } from "react";
import { shakeSrc } from "../../utils/constants";
import { ContactCtx } from "../../utils/context";
import Button from "../utils/button/Button";
import ComponentWrapper from "../utils/componentWrapper/ComponentWrapper";
import "./contact.scss";
import InputField from "./inputField/InputField";

const Contact: FC = () => {
  const { inputFields, sendEmail, validate } = useContext(ContactCtx);

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
