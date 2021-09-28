import emailjs from 'emailjs-com';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { getInitialMessagesForContactInputFields } from '../services/mock/databaseMethods';

export const useContactInputFields = () => {
  const initialMessages = getInitialMessagesForContactInputFields();
  const [nameMessage, setNameMessage] = useState<IMessage>(initialMessages[0]);
  const [emailMessage, setEmailMessage] = useState<IMessage>(
    initialMessages[1]
  );
  const [subjectMessage, setSubjectMessage] = useState<IMessage>(
    initialMessages[2]
  );
  const [bodyMessage, setBodyMessage] = useState<IMessage>(initialMessages[3]);

  const getSuccess = (): IMessage => ({ message: null, type: 'success' });
  const getError = (message: string): IMessage => ({ message, type: 'error' });
  const getWarning = (message: string): IMessage => ({
    message,
    type: 'warning',
  });

  const names = ['Name', 'Email', 'Subject'];
  const patterns = [
    '[A-Za-z]{4,}',
    '[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
    '.{4,}',
  ];

  const [namePattern, emailPattern, subjectPattern] = patterns.map(
    (pattern) => new RegExp(pattern)
  );

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    namePattern.test(e.currentTarget.value)
      ? setNameMessage(getSuccess())
      : e.currentTarget.value === ''
        ? setNameMessage(getError('Please, fill in the "Name" field'))
        : setNameMessage(
          getWarning(
            'Please, provide 4 or more letter characters to "Name" field'
          )
        );

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    emailPattern.test(e.currentTarget.value)
      ? setEmailMessage(getSuccess())
      : e.currentTarget.value === ''
        ? setEmailMessage(getError('Please, fill in the "Email" field'))
        : setEmailMessage(
          getWarning(
            'Please, provide at least one @ and . symbols each to "Email" field'
          )
        );

  const onSubjectChange = (e: ChangeEvent<HTMLInputElement>) =>
    subjectPattern.test(e.currentTarget.value)
      ? setSubjectMessage(getSuccess())
      : e.currentTarget.value === ''
        ? setSubjectMessage(getError('Please, fill in the "Subject" field'))
        : setSubjectMessage(
          getWarning('Please, provide 4 or more characters to "Subject" field')
        );

  const onBodyMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    e.currentTarget.value === ''
      ? setBodyMessage(getError('Please, fill in the "Message" field'))
      : setBodyMessage(getSuccess());

  const changeHandlers = [onNameChange, onEmailChange, onSubjectChange];

  const inputFields: IFormInput[] = [
    {
      name: names[0],
      pattern: patterns[0],
      onChange: changeHandlers[0],
    },
    {
      name: names[1],
      pattern: patterns[1],
      onChange: changeHandlers[1],
    },
    {
      name: names[2],
      pattern: patterns[2],
      onChange: changeHandlers[2],
    },
  ];

  const reset = () => {
    setNameMessage(initialMessages[0]);
    setEmailMessage(initialMessages[1]);
    setSubjectMessage(initialMessages[2]);
    setBodyMessage(initialMessages[3]);
  };

  return {
    inputFields,
    nameMessage,
    emailMessage,
    subjectMessage,
    bodyMessage,
    onBodyMessageChange,
    reset,
  };
};

export const useContactPageValidation = (messages: IMessage[]) => {
  const [validated, setValidated] = useState(false);

  const validate = () => {
    if (messages.every((msg) => msg.type === 'success')) {
      setValidated(true);
    } else {
      messages
        .filter((msg) => msg.type !== 'success')
        .map((msg) => toast(msg.message, { type: msg.type }));
    }
  };

  return { validated, validate, setValidated };
};

interface SendEmailProps {
  validated: boolean;
  validate: () => void;
  setValidated: (validated: boolean) => void;
  reset: () => void;
}

export const useSendEmail = ({
  validated,
  validate,
  setValidated,
  reset,
}: SendEmailProps) => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    validate();

    if (validated) {
      emailjs
        .sendForm(
          'gmail',
          'gmail_template',
          e.target,
          'user_sKeSExZkAa6453YNTtvdY'
        )
        .then(() =>
          toast('Your message was successfully sent', { type: 'success' })
        )
        .catch((e) => toast(e, { type: 'error' }))
        .finally(() => {
          setValidated(false);
          reset();
        });

      e.target.reset();
    }
  };

  return sendEmail;
};
