import emailjs from 'emailjs-com';
import { init } from 'ityped';
import { ChangeEvent, createRef, LegacyRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { services } from '../services/services';
import { portfolioAmountPerPage } from './constants';
import { SECOND } from './date';

//Menu Hooks
export const useMenuRouter = (title: string) => {
  const history = useHistory();

  const redirect = () =>
    history.push(title !== 'Home' ? title.toLowerCase() : '');

  return redirect;
};

// Home Hooks
export const useITypedLib = () => {
  const textRef: LegacyRef<HTMLSpanElement> = createRef();

  useEffect(() => {
    textRef.current &&
      init(textRef.current, {
        showCursor: true,
        backDelay: SECOND * 2,
        strings: [
          'Front-End Developer',
          'React SPA Creator',
          'Inspired Programmer',
        ],
      });
    //eslint-disable-next-line
  }, []);

  return textRef;
};

//Portfolio Hooks
interface PortfolioProps {
  active: number;
  setLoading: (loading: boolean) => void;
  pushError: (text: string) => void;
}

export const useFetchPortfolioData = ({
  active,
  setLoading,
  pushError,
}: PortfolioProps) => {
  const [data, setData] = useState<IPortfolio[]>([]);
  const [pagesCount, setPagesCount] = useState(1);

  useEffect(() => {
    const startIdx = active * portfolioAmountPerPage;
    const endIdx = startIdx + portfolioAmountPerPage;

    setLoading(true);

    services.portfolioService
      .getPortfolioList()
      .then((data) => {
        setData(data.slice(startIdx, endIdx));
        setPagesCount(Math.floor(data.length / portfolioAmountPerPage));
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [active, setLoading, pushError]);

  return { data, pagesCount };
};

//Works Hooks
interface WorksProps {
  setLoading: (loading: boolean) => void;
  pushError: (text: string) => void;
}

export const useFetchWorksData = ({ setLoading, pushError }: WorksProps) => {
  const [data, setData] = useState<IWorks[]>([]);

  useEffect(() => {
    setLoading(true);

    services.worksService
      .getWorksData()
      .then(setData)
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setLoading, pushError]);

  return data;
};

interface WorksChangeCurrentProps {
  data: IWorks[];
  current: number;
  setCurrent: (current: number) => void;
}

export const useChangeCurrentWork = ({
  data,
  current,
  setCurrent,
}: WorksChangeCurrentProps) => {
  const changeCurrent = (direction: SliderDirection) =>
    direction === 'left'
      ? setCurrent(current > 0 ? current - 1 : data.length - 1)
      : setCurrent(current < data.length - 1 ? current + 1 : 0);

  return changeCurrent;
};

//Contact Hooks
interface ContactInputFieldsProps {
  nameMessage: IMessage;
  setNameMessage: (message: IMessage) => void;
  resetNameMessage: () => void;

  emailMessage: IMessage;
  setEmailMessage: (message: IMessage) => void;
  resetEmailMessage: () => void;

  subjectMessage: IMessage;
  setSubjectMessage: (message: IMessage) => void;
  resetSubjectMessage: () => void;
}

export const useContactInputFields = ({
  nameMessage,
  setNameMessage,
  resetNameMessage,

  emailMessage,
  setEmailMessage,
  resetEmailMessage,

  subjectMessage,
  setSubjectMessage,
  resetSubjectMessage,
}: ContactInputFieldsProps) => {
  const getSuccess = (): IMessage => ({ message: null, type: 'success' });
  const getError = (message: string | null): IMessage => ({
    message,
    type: 'error',
  });
  const getWarning = (message: string | null): IMessage => ({
    message,
    type: 'warning',
  });

  const names = ['Name', 'Email', 'Subject'];
  const patterns = [
    '[A-Za-z]{3,}',
    '[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
    '.{1,}',
  ];
  const messages = [nameMessage, emailMessage, subjectMessage];

  const [namePattern, emailPattern, subjectPattern] = patterns.map(
    (pattern) => new RegExp(pattern)
  );

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    namePattern.test(e.currentTarget.value)
      ? setNameMessage({ message: null, type: 'success' })
      : e.currentTarget.value === ''
        ? setNameMessage(getError('Please, fill in the "Name" field'))
        : setNameMessage(
          getWarning(
            'Please, provide 3 or more letter characters to "Name" field'
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
      : setSubjectMessage(getError('Please, fill in the "Subject" field'));

  const changeHandlers = [onNameChange, onEmailChange, onSubjectChange];

  const inputFields: IFormInput[] = [
    {
      name: names[0],
      pattern: patterns[0],
      valid: nameMessage.type === 'success',
      invalid: nameMessage.type === 'error',
      incorrect: nameMessage.type === 'warning',
      onChange: changeHandlers[0],
    },
    {
      name: names[1],
      pattern: patterns[1],
      valid: emailMessage.type === 'success',
      invalid: emailMessage.type === 'error',
      incorrect: emailMessage.type === 'warning',
      onChange: changeHandlers[1],
    },
    {
      name: names[2],
      pattern: patterns[2],
      valid: subjectMessage.type === 'success',
      invalid: subjectMessage.type === 'error',
      incorrect: subjectMessage.type === 'warning',
      onChange: changeHandlers[2],
    },
  ];

  const reset = () => {
    resetNameMessage();
    resetEmailMessage();
    resetSubjectMessage();
  };

  return {
    inputFields,
    messages,
    reset,
  };
};

interface ContactValidationProps extends IWithError, IWithWarning {
  messages: IMessage[];
  setValidated: (validated: boolean) => void;
}

export const useContactPageValidation = ({
  messages,
  setValidated,
  pushError,
  pushWarning,
}: ContactValidationProps) => {
  const validate = () =>
    messages.every((msg) => msg.type === 'success')
      ? setValidated(true)
      : messages
        .filter((msg) => msg.type !== 'success')
        .map((msg) =>
          msg.type === 'error'
            ? pushError(msg.message)
            : pushWarning(msg.message)
        );

  return validate;
};

interface SendEmailProps extends IWithSuccess {
  validated: boolean;
  setValidated: (validated: boolean) => void;
  reset: () => void;
}

export const useSendEmail = ({
  validated,
  setValidated,
  reset,
  pushSuccess,
}: SendEmailProps) => {
  const sendEmail = (e: any) => {
    e.preventDefault();

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
        .catch((e) => pushSuccess(e))
        .finally(() => {
          setValidated(false);
          reset();
        });

      e.target.reset();
    }
  };

  return sendEmail;
};
