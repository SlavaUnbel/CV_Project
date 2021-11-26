import React, { FC } from 'react';

import Contact from '../../components/contact/Contact';
import { ContactCtx } from '../../utils/context';
import {
  useContactInputFields,
  useContactPageValidation,
  useMouseWheel,
  useRedirectToItem,
  useScrollRedirect,
  useSendEmail,
  useWindowTitle,
} from '../../utils/hooks';
import { portfolioPath } from '../../utils/route';

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
  useWindowTitle("Contact");

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

  const goToPortfolio = useRedirectToItem(portfolioPath);
  const wheelDirection = useMouseWheel();
  const onWheel = useScrollRedirect(wheelDirection, goToPortfolio);

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

        onWheel,
      }}
    >
      <Contact />
    </ContactCtx.Provider>
  );
};

export default ContactContext;
