import emailjs from 'emailjs-com';
import { init } from 'ityped';
import {
  ChangeEvent,
  FormEvent,
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { services } from '../services/services';
import {
  movieAppApi,
  movieAppSearchApi,
  portfolioAmountPerPage,
} from './constants';
import { SECOND } from './date';

// General Hooks
export const useWindowTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? title : 'CV Homepage';
  }, [title]);
};

export const useHover = () => {
  const [hovered, setHovered] = useState(false);

  return { hovered, setHovered };
};

export const useRedirectToItem = (link: string) => {
  const history = useHistory();

  const redirect = () => history.push(link);

  return redirect;
};

export const useToggleClass = () => {
  const [newClass, setNewClass] = useState(false);

  const toggleClass = () => setNewClass(!newClass);

  return { newClass, toggleClass };
};

export const delay = (delay: number) =>
  new Promise((resolve) => window.setTimeout(resolve, delay));

//Menu Hooks
export const useMenuRouter = (
  title: string,
  openCloseMenu: (menuOpen: boolean) => void,
) => {
  const history = useHistory();

  const redirect = () => {
    history.push(title !== 'Home' ? title.toLowerCase() : '');
    openCloseMenu(false);
  };

  return redirect;
};

// Home Hooks
export const useITypedLib = () => {
  const textRef: LegacyRef<HTMLSpanElement> = useRef(null);

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

interface PortfolioMediaElementProps {
  hovered: boolean;
  item: IPortfolio;
}

export const useGetMediaElement = ({
  hovered,
  item,
}: PortfolioMediaElementProps) => {
  if (!item.imgSrc || !item.videoSrc) return <></>;

  const mediaElement = (() =>
    hovered ? (
      <video
        src={item.videoSrc}
        autoPlay
        muted
        playsInline
        loop
        style={{ width: '100%', height: '100%' }}
      />
    ) : (
      <img
        src={item.imgSrc}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    ))();

  return mediaElement;
};

//Works Hooks
interface WorksProps extends IWithError, IWithWarning {
  setWorksData: (worksData: IWorks[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useFetchWorksData = ({
  setWorksData,
  setLoading,
  pushError,
  pushWarning,
}: WorksProps) => {
  useEffect(() => {
    setLoading(true);

    services.worksService
      .getWorksData()
      .then((data) => {
        setWorksData(data);
        data.length === 0 && pushWarning('No data found');
      })
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
    (pattern) => new RegExp(pattern),
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
            'Please, provide 3 or more letter characters to "Name" field',
          ),
        );

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    emailPattern.test(e.currentTarget.value)
      ? setEmail(getSuccess())
      : e.currentTarget.value === ''
      ? setEmail(getError('Please, fill in the "Email" field'))
      : setEmail(
          getWarning(
            'Please, provide the "Email" field with value as shown below: \n smth@domain.com',
          ),
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
              : pushWarning(msg.message),
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
          'user_sKeSExZkAa6453YNTtvdY',
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

// Expanding Cards Hooks
interface ExpandingCardsProps extends IWithLoading, IWithError, IWithWarning {
  setExpandingCardsData: (data: IExpandingCards[]) => void;
}

export const useFetchExpandingCardsData = ({
  setExpandingCardsData,
  setLoading,
  pushError,
  pushWarning,
}: ExpandingCardsProps) => {
  useEffect(() => {
    setLoading(true);

    services.portfolioItemsService
      .getExpandingCardsData()
      .then((data) => {
        setExpandingCardsData(data);
        data.length === 0 && pushWarning('No data found');
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setExpandingCardsData, setLoading, pushError, pushWarning]);
};

export const useExpandingCardRef = () => {
  const ref: LegacyRef<HTMLDivElement> = useRef(null);

  const handleClick = () => {
    removeActiveClasses();
    ref.current?.classList.add('active');
  };

  const removeActiveClasses = () => {
    const siblings = ref.current?.parentNode
      ?.childNodes as NodeListOf<HTMLDivElement>;
    siblings.forEach((node) => node.classList.remove('active'));
  };

  return { ref, handleClick };
};

//Progress Steps Hooks
interface ProgressStepsProps extends IWithLoading, IWithError, IWithWarning {
  setProgressStepsData: (progressStepsData: number[]) => void;
}

export const useFetchProgressStepsData = ({
  setProgressStepsData,
  setLoading,
  pushError,
  pushWarning,
}: ProgressStepsProps) => {
  useEffect(() => {
    setLoading(true);

    services.portfolioItemsService
      .getProgressStepsData()
      .then((data) => {
        setProgressStepsData(data);
        data.length === 0 && pushWarning('No data found');
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setProgressStepsData, setLoading, pushError, pushWarning]);
};

interface ButtonNavigatonProps {
  currentProgressStep: number;
  setCurrentProgressStep: (step: number) => void;
  setProgressStepsWidth: (width: string) => void;
}

export const useButtonNavigation = ({
  currentProgressStep,
  setCurrentProgressStep,
  setProgressStepsWidth,
}: ButtonNavigatonProps) => {
  const [circles, setCircles] = useState<NodeListOf<HTMLDivElement>>();

  const ref: LegacyRef<HTMLDivElement> = useRef(null);

  const prev = () => {
    setCurrentProgressStep(currentProgressStep - 1);

    if (circles) {
      setProgressStepsWidth(
        `${((currentProgressStep - 2) / (circles.length - 2)) * 100}%`,
      );
      circles.forEach(
        (circle, idx) =>
          currentProgressStep - 1 < idx &&
          !circle.classList.contains('progress') &&
          circle.classList.remove('active'),
      );
    }
  };

  const next = () => {
    setCurrentProgressStep(currentProgressStep + 1);

    if (circles) {
      setProgressStepsWidth(
        `${(currentProgressStep / (circles.length - 2)) * 100}%`,
      );
      circles.forEach(
        (circle, idx) =>
          currentProgressStep + 1 === idx &&
          !circle.classList.contains('progress') &&
          circle.classList.add('active'),
      );
    }
  };

  useEffect(() => {
    setCircles(
      ref.current?.childNodes[0].childNodes as NodeListOf<HTMLDivElement>,
    );
  }, [ref]);

  return { ref, prev, next };
};

//Rotating Navigation Hooks
interface RotatingNavigationProps
  extends IWithLoading,
    IWithError,
    IWithWarning {
  setRotatingNavigationData: (data: IRotatingNavigation) => void;
}

export const useFetchRotatingNavigationData = ({
  setRotatingNavigationData,
  setLoading,
  pushError,
  pushWarning,
}: RotatingNavigationProps) => {
  useEffect(() => {
    setLoading(true);

    services.portfolioItemsService
      .getRotatingNavigationData()
      .then((data) => {
        setRotatingNavigationData(data);
        !data && pushWarning('No data found');
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setRotatingNavigationData, setLoading, pushError, pushWarning]);
};

export const useNavigationAnimation = () => {
  const ref: LegacyRef<HTMLDivElement> = useRef(null);

  const open = () => {
    ref.current?.classList.add('show-nav');
    ref.current?.parentElement?.children[0].classList.add('rotate');
  };

  const close = () => {
    ref.current?.classList.remove('show-nav');
    ref.current?.parentElement?.children[0].classList.remove('rotate');
  };

  return { ref, open, close };
};

//Scroll Animation Hooks
export const useScrollingAnimation = () => {
  const [boxes, setBoxes] = useState<NodeListOf<HTMLDivElement>>();
  const [wrapper, setWrapper] = useState<HTMLElement | null>();
  const ref: LegacyRef<HTMLDivElement> = useRef(null);

  const showBoxesFunction = useCallback(
    () =>
      boxes?.forEach((box) =>
        box.getBoundingClientRect().top < (window.innerHeight / 5) * 4
          ? box.classList.add('show')
          : box.classList.remove('show'),
      ),
    [boxes],
  );

  useEffect(() => {
    setBoxes(ref.current?.childNodes as NodeListOf<HTMLDivElement>);
    setWrapper(ref.current?.parentElement);
    showBoxesFunction();
  }, [ref, showBoxesFunction]);

  useEffect(
    () => wrapper?.addEventListener('scroll', showBoxesFunction),
    [wrapper, showBoxesFunction],
  );

  return ref;
};

//Split Landing Page Hooks
interface SplitLandingPageProps extends IWithLoading, IWithError, IWithWarning {
  setSplitLandingPageData: (data: ISplitLandingPage[]) => void;
}

export const useFetchSplitLandingPageData = ({
  setSplitLandingPageData,
  setLoading,
  pushError,
  pushWarning,
}: SplitLandingPageProps) => {
  useEffect(() => {
    setLoading(true);

    services.portfolioItemsService
      .getSplitLandingPageData()
      .then((data) => {
        setSplitLandingPageData(data);
        !data && pushWarning('No data found');
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setSplitLandingPageData, setLoading, pushError, pushWarning]);
};

export const useSplitLandingPageHoverEffect = (data: ISplitLandingPage[]) => {
  const ref: LegacyRef<HTMLDivElement> = useRef(null);

  const enterLeft = () => ref.current?.classList.add('hover-left');

  const enterRight = () => ref.current?.classList.add('hover-right');

  const leaveLeft = () => ref.current?.classList.remove('hover-left');

  const leaveRight = () => ref.current?.classList.remove('hover-right');

  const leaveBoth = () => {
    leaveLeft();
    leaveRight();
  };

  return { ref, enterLeft, enterRight, leaveLeft, leaveRight, leaveBoth };
};

//Form Wave Animation Hooks
export const useFormWaveAnimationEffect = () => {
  const labelRef: LegacyRef<HTMLLabelElement> = useRef(null);

  useEffect(() => {
    if (labelRef.current && labelRef.current.innerText)
      labelRef.current.innerHTML = labelRef.current.innerText
        .split('')
        .map(
          (letter, idx) =>
            `<span style='transition-delay: ${idx * 50}ms'>${letter}</span>`,
        )
        .join('');
  }, [labelRef]);

  return labelRef;
};

//Dad Jokes Hooks
interface DadJokesProps extends IWithLoading, IWithError {
  setDadJokesData: (data: IDadJokes) => void;
}

export const useFetchDadJokesData = ({
  setDadJokesData,
  setLoading,
  pushError,
}: DadJokesProps) => {
  const getJoke = useCallback(() => {
    setLoading(true);

    services.portfolioItemsService
      .getDadJokesDataFromApi()
      .then((data) => {
        if (data.status === 200) {
          setDadJokesData(data);
        } else {
          pushError(`Api responded with error code ${data.status}`);
        }
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
    //eslint-disable-next-line
  }, [setDadJokesData, setLoading, pushError]);

  useEffect(() => getJoke(), [getJoke]);

  return getJoke;
};

//Faq Collapse Hooks
interface FaqCollapseProps extends IWithLoading, IWithError, IWithWarning {
  setFaqCollapseData: (data: IFaqCollapse[]) => void;
}

export const useFetchFaqCollapseData = ({
  setFaqCollapseData,
  setLoading,
  pushError,
  pushWarning,
}: FaqCollapseProps) => {
  useEffect(() => {
    setLoading(true);

    services.portfolioItemsService
      .getFaqCollapseData()
      .then((data) => {
        setFaqCollapseData(data);
        !data && pushWarning('No data found');
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setFaqCollapseData, setLoading, pushError, pushWarning]);
};

// Auth Project Hooks
interface AuthProjectInputFieldsProps {
  messages: IAuthProjectMessages;
  setEmailMessage: (
    messages: IAuthProjectMessages,
    emailMessage: IMessage,
  ) => void;
  setPasswordMessage: (
    messages: IAuthProjectMessages,
    passwordMessage: IMessage,
  ) => void;

  username: string;
  setUsername: (username: string) => void;

  password: string;
  setPassword: (password: string) => void;
}

export const useAuthProjectInputFields = ({
  messages,
  setEmailMessage,
  setPasswordMessage,

  username,
  setUsername,

  password,
  setPassword,
}: AuthProjectInputFieldsProps) => {
  //every input options
  const labels = ['Username', 'Password'];
  const patterns = ['.{4,}', '.{4,}'];
  const [emailPattern, passwordPattern] = patterns.map(
    (pattern) => new RegExp(pattern),
  );
  const { emailMessage, passwordMessage } = messages;

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
  const setEmailMsg = (emailMessage: IMessage) =>
    setEmailMessage(messages, emailMessage);
  const setPasswordMsg = (passwordMessage: IMessage) =>
    setPasswordMessage(messages, passwordMessage);

  //inputs' values change handlers
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);

    emailPattern.test(e.currentTarget.value)
      ? setEmailMsg(getSuccess())
      : e.currentTarget.value === ''
      ? setEmailMsg(getError('Please, fill in the "Username" field'))
      : setEmailMsg(
          getWarning(
            'Please, provide the "Username" field with at least 4 symbols',
          ),
        );
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    passwordPattern.test(e.currentTarget.value)
      ? setPasswordMsg(getSuccess())
      : e.currentTarget.value === ''
      ? setPasswordMsg(getError('Please, fill in the "Email" field'))
      : setPasswordMsg(
          getWarning(
            'Please, provide at least 4 symbols to the "Password" field',
          ),
        );
  };

  const changeHandlers = [onEmailChange, onPasswordChange];

  //resulting array of inputs to render
  const inputFields: IFormInput[] = [
    {
      name: labels[0],
      valid: emailMessage.type === 'success',
      invalid: emailMessage.type === 'error',
      incorrect: emailMessage.type === 'warning',
      value: username,
      type: 'text',
      onChange: changeHandlers[0],
    },
    {
      name: labels[1],
      valid: passwordMessage.type === 'success',
      invalid: passwordMessage.type === 'error',
      incorrect: passwordMessage.type === 'warning',
      value: password,
      type: 'password',
      onChange: changeHandlers[1],
    },
  ];

  return inputFields;
};

interface AuthProjectValidationProps extends IWithError, IWithWarning {
  messages: IAuthProjectMessages;
  setValidated: (validated: boolean) => void;
}

export const useAuthProjectPageValidation = ({
  messages,
  setValidated,
  pushError,
  pushWarning,
}: AuthProjectValidationProps) => {
  const validate = () =>
    Object.values(messages).every((msg) => msg.type === 'success')
      ? setValidated(true)
      : Object.values(messages)
          .filter((msg) => msg.type !== 'success')
          .map((msg) =>
            msg.type === 'error'
              ? pushError(msg.message)
              : pushWarning(msg.message),
          );

  return validate;
};

interface AuthProjectSubmitProps extends IWithError, IWithSuccess {
  username: string;
  password: string;
  role: string;
  validated: boolean;
  reset: () => void;

  setCurrentUserInfo: (info: string, role?: string) => void;

  usage: AuthProjectUsage;
  setUsage: (usage: AuthProjectUsage) => void;
}

export const useAuthProjectSubmit = ({
  username,
  password,
  role,
  validated,
  reset,

  usage,
  setUsage,

  setCurrentUserInfo,

  pushError,
  pushSuccess,
}: AuthProjectSubmitProps) => {
  const [userExists, setUserExists] = useState(false);

  const message = (response: any) =>
    response.type === 'error'
      ? pushError(response.message)
      : pushSuccess(response.message);

  const register = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validated)
      services.authProjectService
        .register(username, password, role)
        .then((response) => message(response))
        .catch((err) => pushError(err))
        .finally(() => {
          reset();
          setUsage('login');
        });
  };

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validated)
      services.authProjectService
        .login(username, password)
        .then((response) => {
          message(response);
          if (response.auth) {
            setUserExists(true);
            setCurrentUserInfo('Refresh the page to proceed');
          }
        })
        .catch((err) => pushError(err))
        .finally(() => {
          if (userExists) {
            reset();
            setUsage('loggedIn');
          }
        });
  };

  const logout = () =>
    services.authProjectService
      .logout()
      .then((response) => {
        if (response.status === 200) {
          setUserExists(false);
          setCurrentUserInfo('Refresh the page to proceed');
          pushSuccess('Your session has been finished!');
        }
      })
      .catch((err) => pushError(err))
      .finally(() => !userExists && setUsage('login'));

  const checkAuth = () =>
    services.authProjectService
      .checkIfAuthenticated()
      .then((response) => message(response))
      .catch((err) => pushError(err));

  useEffect(() => {
    services.authProjectService.checkIfLoggedIn().then((response) => {
      if (response.data.loggedIn) {
        setCurrentUserInfo(
          `You are now logged in as "${response.data.user[0].username}"`,
          `User role: ${response.data.user[0].role}`,
        );
        setUsage('loggedIn');
      } else {
        setCurrentUserInfo('No user data is provided');
        setUsage('login');
      }
    });
  }, [setCurrentUserInfo, setUsage]);

  const submit =
    usage === 'registration' ? register : usage === 'login' ? login : undefined;

  return { submit, logout, checkAuth };
};

//Random Choice Picker Hooks
export const useChooseRandomTag = () => {
  const tagsRef: LegacyRef<HTMLDivElement> = useRef(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    createChoices(e.currentTarget.value);

    if (e.key === 'Enter') {
      e.currentTarget.value = '';
      chooseRandomTag();
    }
  };

  const handleClick = (e: any) => {
    e.currentTarget.value = '';
    chooseRandomTag();
  };

  const createChoices = (input: string) => {
    const tags = input
      .split(',')
      .filter((tag) => tag.trim() !== '')
      .map((tag) => tag.trim());

    if (tagsRef.current) tagsRef.current.innerHTML = '';

    tags.forEach((tag) => {
      const tagEl = document.createElement('span');
      tagEl.classList.add('tag');
      tagEl.innerText = tag;
      tagsRef.current?.appendChild(tagEl);
    });
  };

  const chooseRandomTag = () => {
    const times = 30;
    const timeout = SECOND / 10;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, timeout);
    }, timeout);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);
      }, timeout);
    }, times * timeout);
  };

  const pickRandomTag = () => {
    if (!tagsRef.current) return;

    return tagsRef.current.childNodes[
      Math.floor(Math.random() * tagsRef.current.childNodes.length)
    ] as HTMLSpanElement;
  };

  const highlightTag = (tag?: HTMLSpanElement) =>
    tag?.classList.add('highlight');

  const unHighlightTag = (tag?: HTMLSpanElement) =>
    tag?.classList.remove('highlight');

  return { tagsRef, handleKeyUp, handleClick };
};

//Animated Navigation Hooks
interface AnimatedNavigationProps
  extends IWithLoading,
    IWithError,
    IWithWarning {
  setAnimatedNavigationData: (data: string[]) => void;
}

export const useFetchAnimatedNavigationData = ({
  setAnimatedNavigationData,
  setLoading,
  pushError,
  pushWarning,
}: AnimatedNavigationProps) => {
  useEffect(() => {
    setLoading(true);

    services.portfolioItemsService
      .getAnimatedNavigationData()
      .then((data) => {
        setAnimatedNavigationData(data);
        !data && pushWarning('No data found');
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setAnimatedNavigationData, setLoading, pushError, pushWarning]);
};

//Incrementing Counter Hooks
export const useIncrementingCounter = () => {
  const ref: LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerText = '0';

      const updateCounter = () => {
        //@ts-ignore
        const target = +ref.current.getAttribute('data-target');
        //@ts-ignore
        const c = +ref.current.innerText;

        const increment = target / 200;

        if (ref.current) {
          if (c < target) {
            ref.current.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
          } else {
            ref.current.innerText = target.toString();
          }
        }
      };

      updateCounter();
    }
  }, [ref]);

  return ref;
};

//Movie App Hooks
interface MovieAppProps extends IWithLoading, IWithError, IWithWarning {
  setMovies: (movies: any[]) => void;
}

export const useMovieAppApi = ({
  setMovies,
  setLoading,
  pushError,
  pushWarning,
}: MovieAppProps) => {
  const getData = useCallback(
    (url: string) => {
      setLoading(true);

      services.portfolioItemsService
        .getMovieAppDataFromApi(url)
        .then((data) => {
          setMovies(data.results);
          data.results.length === 0 && pushWarning('No data found!');
        })
        .catch((e) => pushError(e))
        .finally(() => setLoading(false));
    },
    [setMovies, setLoading, pushError, pushWarning],
  );

  useEffect(() => getData(movieAppApi), [getData]);

  return getData;
};

export const useMovieAppSearch = (getData: (url: string) => void) => {
  const searchRef: LegacyRef<HTMLInputElement> = useRef(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchRef.current) {
      const searchTerm = searchRef.current.value;

      if (searchTerm !== '') {
        getData(`${movieAppSearchApi}${searchTerm}`);

        searchRef.current.value = '';
      } else {
        window.location.reload();
      }
    }
  };

  return { searchRef, submit };
};
