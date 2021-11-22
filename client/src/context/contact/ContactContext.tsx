import React, { FC } from 'react';
import Contact from '../../components/contact/Contact';
import { ContactCtx } from '../../utils/context';
import {
  useContactInputFields,
  useContactPageValidation,
  useSendEmail,
  useWindowTitle,
} from '../../utils/hooks';

interface Props extends IWithError, IWithWarning, IWithSuccess {
  messages: IMessages;
  setNameMessage: (messages: IMessages, nameMessage: IMessage) => void;
  setEmailMessage: (messages: IMessages, emailMessage: IMessage) => void;
  setSubjectMessage: (messages: IMessages, subjectMessage: IMessage) => void;
  reset: () => void;

  validated: boolean;
  setValidated: (validated: boolean) => void;
}

const ContactContext: FC<Props> = ({
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
    <ContactCtx.Provider
      value={{
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

        inputFields,
        validate,
        sendEmail,
      }}
    >
      <Contact />
    </ContactCtx.Provider>
  );
};

export default ContactContext;
