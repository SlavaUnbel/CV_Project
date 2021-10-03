import emailjs from 'emailjs-com';
import { init } from 'ityped';
import { ChangeEvent, createRef, LegacyRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { services } from '../services/services';
import { portfolioAmountPerPage } from './constants';
import { SECOND } from './date';

// General Hooks
export const useWindowTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? title : 'CV Homepage';
  }, [title]);
};

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
interface PortfolioProps extends IWithError, IWithWarning {
  active: number;
  setPortfolioData: (portfolioData: IPortfolio[]) => void;
  setPagesCount: (pagesCount: number) => void;
  setLoading: (loading: boolean) => void;
}

export const useFetchPortfolioData = ({
  active,
  setPortfolioData,
  setPagesCount,
  setLoading,
  pushError,
  pushWarning,
}: PortfolioProps) => {
  useEffect(() => {
    const startIdx = active * portfolioAmountPerPage;
    const endIdx = startIdx + portfolioAmountPerPage;

    setLoading(true);

    services.portfolioService
      .getPortfolioList()
      .then((data) => {
        setPortfolioData(data.slice(startIdx, endIdx));
        setPagesCount(Math.ceil(data.length / portfolioAmountPerPage));
        data.length === 0 && pushWarning('No data found');
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [
    active,
    setPortfolioData,
    setPagesCount,
    setLoading,
    pushError,
    pushWarning,
  ]);
};

export const useRedirectToItem = (link: string) => {
  const history = useHistory();

  const redirect = () => history.push(link);

  return redirect;
}

//Works Hooks
interface WorksProps extends IWithError, IWithWarning {
  setWorksData: (worksData: IWorks[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useFetchWorksData = ({ setWorksData, setLoading, pushError, pushWarning }: WorksProps) => {
  useEffect(() => {
    setLoading(true);

    services.worksService
      .getWorksData()
      .then((data) => { setWorksData(data); data.length === 0 && pushWarning('No data found') })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setWorksData, setLoading, pushError, pushWarning]);
};

//Contact Hooks
interface ContactInputFieldsProps {
  messages: IMessages;
  setNameMessage: (messages: IMessages, nameMessage: IMessage) => void;
  setEmailMessage: (messages: IMessages, emailMessage: IMessage) => void;
  setSubjectMessage: (messages: IMessages, subjectMessage: IMessage) => void;
}

export const useContactInputFields = ({
  messages,
  setNameMessage,
  setEmailMessage,
  setSubjectMessage,
}: ContactInputFieldsProps) => {
  //every input options
  const names = ['Name', 'Email', 'Subject'];
  const patterns = [
    '[A-Za-z]{3,}',
    '[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
    '.{1,}',
  ];
  const [namePattern, emailPattern, subjectPattern] = patterns.map(
    (pattern) => new RegExp(pattern)
  );
  const { nameMessage, emailMessage, subjectMessage } = messages;

  //functions to change inputs' states
  const getSuccess = (): IMessage => ({ message: null, type: 'success' });
  const getError = (message: string | null): IMessage => ({
    message,
    type: 'error',
  });
  const getWarning = (message: string | null): IMessage => ({
    message,
    type: 'warning',
  });
  const setName = (nameMessage: IMessage) =>
    setNameMessage(messages, nameMessage);
  const setEmail = (emailMessage: IMessage) =>
    setEmailMessage(messages, emailMessage);
  const setSubject = (subjectMessage: IMessage) =>
    setSubjectMessage(messages, subjectMessage);

  //inputs' values change handlers
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    namePattern.test(e.currentTarget.value)
      ? setName(getSuccess())
      : e.currentTarget.value === ''
        ? setName(getError('Please, fill in the "Name" field'))
        : setName(
          getWarning(
            'Please, provide 3 or more letter characters to "Name" field'
          )
        );

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    emailPattern.test(e.currentTarget.value)
      ? setEmail(getSuccess())
      : e.currentTarget.value === ''
        ? setEmail(getError('Please, fill in the "Email" field'))
        : setEmail(
          getWarning(
            'Please, provide the "Email" field with value as shown below: \n smth@domain.com'
          )
        );

  const onSubjectChange = (e: ChangeEvent<HTMLInputElement>) =>
    subjectPattern.test(e.currentTarget.value)
      ? setSubject(getSuccess())
      : setSubject(getError('Please, fill in the "Subject" field'));

  const changeHandlers = [onNameChange, onEmailChange, onSubjectChange];

  //resulting array of inputs to render
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

  return inputFields;
};

interface ContactValidationProps extends IWithError, IWithWarning {
  messages: IMessages;
  setValidated: (validated: boolean) => void;
}

export const useContactPageValidation = ({
  messages,
  setValidated,
  pushError,
  pushWarning,
}: ContactValidationProps) => {
  const validate = () =>
    Object.values(messages).every((msg) => msg.type === 'success')
      ? setValidated(true)
      : Object.values(messages)
        .filter((msg) => msg.type !== 'success')
        .map((msg) =>
          msg.type === 'error'
            ? pushError(msg.message)
            : pushWarning(msg.message)
        );

  return validate;
};

interface SendEmailProps extends IWithError, IWithSuccess {
  validated: boolean;
  setValidated: (validated: boolean) => void;
  reset: () => void;
}

export const useSendEmail = ({
  validated,
  setValidated,
  reset,
  pushError,
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
        .then(() => pushSuccess('Your message was successfully sent'))
        .catch((e) => pushError(e))
        .finally(() => {
          setValidated(false);
          reset();
        });

      e.target.reset();
    }
  };

  return sendEmail;
};