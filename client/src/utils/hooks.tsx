import emailjs from 'emailjs-com';
import { IEmojiData } from 'emoji-picker-react';
import { init } from 'ityped';
import React, { ChangeEvent, FormEvent, LegacyRef, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { TimeProps } from 'react-countdown-circle-timer';
import { useHistory } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

import { initialPomodoroSettings } from '../reducers/pomodoroTimerReducer';
import { services } from '../services/services';
import { days, isMobile, months, movieAppApi, movieAppSearchApi } from './constants';
import { getDateValueWithZeros, SECOND } from './date';

// General Hooks
export const useWindowTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? title : "Homepage";
  }, [title]);
};

export const useHover = () => {
  const [hovered, setHovered] = useState(false);

  return { hovered, setHovered };
};

export const useMouseWheel = () => {
  const [wheelDirection, setWheelDirection] = useState("");

  const onWheel = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY < 0) {
        setWheelDirection("up");
      } else if (e.deltaY > 0) {
        setWheelDirection("down");
      } else {
        setWheelDirection("");
      }
    },
    [setWheelDirection]
  );

  useEffect(() => {
    window.addEventListener("wheel", onWheel);

    return () => window.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  return wheelDirection;
};

export const useScrollRedirect =
  (
    wheelDirection: string,
    scrollUpCallback?: () => void,
    scrollDownCallback?: () => void
  ) =>
  () => {
    switch (wheelDirection) {
      case "up":
        scrollUpCallback && scrollUpCallback();
        break;
      case "down":
        scrollDownCallback && scrollDownCallback();
        break;
      default:
        return;
    }
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
  openCloseMenu: (menuOpen: boolean) => void
) => {
  const [active, setActive] = useState(false);
  const history = useHistory();
  const loc = history.location.pathname.slice(1);

  useEffect(() => {
    ((loc === "" && title === "Home") || loc === title.toLowerCase()) &&
      setActive(true);

    return () => setActive(false);
  }, [loc, title, setActive]);

  const redirect = () => {
    history.push(title !== "Home" ? title.toLowerCase() : "");
    openCloseMenu(false);
  };

  return { active, redirect };
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
          "Front-End Developer",
          "React SPA Creator",
          "Inspired Programmer",
        ],
      });
    //eslint-disable-next-line
  }, []);

  return textRef;
};

//Portfolio Hooks
interface PortfolioProps extends IWithLoading, IWithError, IWithWarning {
  active: number;
  itemsPerPage: number;
  criteria: string;
  setData: (data: IPortfolio[]) => void;
  setFilteredData: (data: IPortfolio[]) => void;
  setPagesCount: (pagesCount: number) => void;
}

export const useFetchPortfolioData = ({
  active,
  itemsPerPage,
  criteria,
  setData,
  setFilteredData,
  setPagesCount,
  setLoading,
  pushError,
  pushWarning,
}: PortfolioProps) => {
  useEffect(() => {
    if (!setLoading) return;
    const startIdx = (active - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    setLoading(true);

    services.portfolioService
      .getPortfolioList()
      .then((data) => {
        setData(data);
        setFilteredData(
          criteria === "all"
            ? data.slice(startIdx, endIdx)
            : data
                .filter((item) => item.criteria === criteria)
                .slice(startIdx, endIdx)
        );
        setPagesCount(
          Math.ceil(
            (criteria === "all"
              ? data.length
              : data.filter((item) => item.criteria === criteria).length) /
              itemsPerPage
          )
        );
        data.length === 0 && pushWarning("No data found");
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [
    active,
    itemsPerPage,
    criteria,
    setData,
    setFilteredData,
    setPagesCount,
    setLoading,
    pushError,
    pushWarning,
  ]);
};

interface PortfolioPaginationProps {
  active: number;
  pagesCount: number;
  itemsPerPage: number;
  setActivePage: (active: number) => void;
}

export const usePortfolioPagination = ({
  active,
  pagesCount,
  itemsPerPage,
  setActivePage,
}: PortfolioPaginationProps) => {
  const [disabled, setDisabled] = useState(true);

  const paginationValue = `${active}${
    active === 1 ? "st" : active === 2 ? "nd" : active === 3 ? "rd" : "th"
  } ${itemsPerPage === 1 ? "Work" : "Page"}`;

  const inputHandlers = {
    onFocus: (e: any) => {
      setDisabled(false);
      e.currentTarget.value = "";
    },
    onInput: (e: any) =>
      +e.currentTarget.value > pagesCount
        ? setActivePage(pagesCount)
        : +e.currentTarget.value < 1 ||
          isNaN(+e.currentTarget.value) ||
          e.currentTarget.value === ""
        ? setActivePage(1)
        : setActivePage(+e.currentTarget.value),
    onBlur: (e: any) => {
      setDisabled(true);
      e.currentTarget.value = paginationValue;
    },
  };

  return { disabled, paginationValue, inputHandlers };
};

interface PortfolioMediaElementProps {
  hovered: boolean;
  item: IPortfolio;
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
}

export const useGetMediaElement = ({
  hovered,
  item,
  loaded,
  setLoaded,
}: PortfolioMediaElementProps) => {
  if (!item.imgSrc || !item.videoSrc) return <></>;

  const mediaElement = (() => (
    <>
      {!loaded && (
        <img
          src={item.imgSrc}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      )}

      {hovered && (
        <video
          onLoadedData={() => setLoaded(true)}
          src={item.videoSrc}
          autoPlay
          muted
          playsInline
          loop
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </>
  ))();

  return mediaElement;
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
  const names = ["Name", "Email", "Subject"];
  const patterns = [
    "[A-Za-z]{3,}",
    "[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
    ".{1,}",
  ];
  const [namePattern, emailPattern, subjectPattern] = patterns.map(
    (pattern) => new RegExp(pattern)
  );
  const { nameMessage, emailMessage, subjectMessage } = messages;

  //functions to change inputs' states
  const getSuccess = (): IMessage => ({ message: null, type: "success" });
  const getError = (message: string | null): IMessage => ({
    message,
    type: "error",
  });
  const getWarning = (message: string | null): IMessage => ({
    message,
    type: "warning",
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
      : e.currentTarget.value === ""
      ? setName(getError('Please, fill in the "Name" field'))
      : setName(
          getWarning(
            'Please, provide 3 or more letter characters to "Name" field'
          )
        );

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    emailPattern.test(e.currentTarget.value)
      ? setEmail(getSuccess())
      : e.currentTarget.value === ""
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
      valid: nameMessage.type === "success",
      invalid: nameMessage.type === "error",
      incorrect: nameMessage.type === "warning",
      onChange: changeHandlers[0],
    },
    {
      name: names[1],
      pattern: patterns[1],
      valid: emailMessage.type === "success",
      invalid: emailMessage.type === "error",
      incorrect: emailMessage.type === "warning",
      onChange: changeHandlers[1],
    },
    {
      name: names[2],
      pattern: patterns[2],
      valid: subjectMessage.type === "success",
      invalid: subjectMessage.type === "error",
      incorrect: subjectMessage.type === "warning",
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
    Object.values(messages).every((msg) => msg.type === "success")
      ? setValidated(true)
      : Object.values(messages)
          .filter((msg) => msg.type !== "success")
          .map((msg) =>
            msg.type === "error"
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
          "gmail",
          "gmail_template",
          e.target,
          "user_sKeSExZkAa6453YNTtvdY"
        )
        .then(() => pushSuccess("Your message was successfully sent"))
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
  setData: (data: IExpandingCards[]) => void;
}

export const useFetchExpandingCardsData = ({
  setData,
  setLoading,
  pushError,
  pushWarning,
}: ExpandingCardsProps) => {
  useEffect(() => {
    if (!setLoading) return;
    setLoading(true);

    services.portfolioItemsService
      .getExpandingCardsData()
      .then((data) => {
        setData(data);
        data.length === 0 && pushWarning("No data found");
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setData, setLoading, pushError, pushWarning]);
};

export const useExpandingCardRef = () => {
  const ref: LegacyRef<HTMLDivElement> = useRef(null);

  const handleClick = () => {
    removeActiveClasses();
    ref.current?.classList.add("active");
  };

  const removeActiveClasses = () => {
    const siblings = ref.current?.parentNode
      ?.childNodes as NodeListOf<HTMLDivElement>;
    siblings.forEach((node) => node.classList.remove("active"));
  };

  return { ref, handleClick };
};

//Rotating Navigation Hooks
interface RotatingNavigationProps
  extends IWithLoading,
    IWithError,
    IWithWarning {
  setData: (data: IRotatingNavigation) => void;
}

export const useFetchRotatingNavigationData = ({
  setData,
  setLoading,
  pushError,
  pushWarning,
}: RotatingNavigationProps) => {
  useEffect(() => {
    if (!setLoading) return;
    setLoading(true);

    services.portfolioItemsService
      .getRotatingNavigationData()
      .then((data) => {
        setData(data);
        !data && pushWarning("No data found");
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setData, setLoading, pushError, pushWarning]);
};

export const useNavigationAnimation = () => {
  const ref: LegacyRef<HTMLDivElement> = useRef(null);

  const open = () => {
    ref.current?.classList.add("show-nav");
    ref.current?.parentElement?.children[0].classList.add("rotate");
  };

  const close = () => {
    ref.current?.classList.remove("show-nav");
    ref.current?.parentElement?.children[0].classList.remove("rotate");
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
          ? box.classList.add("show")
          : box.classList.remove("show")
      ),
    [boxes]
  );

  useEffect(() => {
    setBoxes(ref.current?.childNodes as NodeListOf<HTMLDivElement>);
    setWrapper(ref.current?.parentElement);
    showBoxesFunction();
  }, [ref, showBoxesFunction]);

  useEffect(
    () => wrapper?.addEventListener("scroll", showBoxesFunction),
    [wrapper, showBoxesFunction]
  );

  return ref;
};

//Form Wave Animation Hooks
export const useFormWaveAnimationEffect = () => {
  const labelRef: LegacyRef<HTMLLabelElement> = useRef(null);

  useEffect(() => {
    if (labelRef.current && labelRef.current.innerText)
      labelRef.current.innerHTML = labelRef.current.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style='transition-delay: ${idx * 50}ms'>${letter}</span>`
        )
        .join("");
  }, [labelRef]);

  return labelRef;
};

//Dad Jokes Hooks
interface DadJokesProps extends IWithLoading, IWithError {
  setData: (data: IDadJokes) => void;
}

export const useFetchDadJokesData = ({
  setData,
  setLoading,
  pushError,
}: DadJokesProps) => {
  const getJoke = useCallback(() => {
    if (!setLoading) return;
    setLoading(true);

    services.portfolioItemsService
      .getDadJokesDataFromApi()
      .then((data) => {
        if (data.status === 200) {
          setData(data);
        } else {
          pushError(`Api responded with error code ${data.status}`);
        }
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
    //eslint-disable-next-line
  }, [setData, setLoading, pushError]);

  useEffect(() => getJoke(), [getJoke]);

  return getJoke;
};

//Faq Collapse Hooks
interface FaqCollapseProps extends IWithLoading, IWithError, IWithWarning {
  setData: (data: IFaqCollapse[]) => void;
}

export const useFetchFaqCollapseData = ({
  setData,
  setLoading,
  pushError,
  pushWarning,
}: FaqCollapseProps) => {
  useEffect(() => {
    if (!setLoading) return;
    setLoading(true);

    services.portfolioItemsService
      .getFaqCollapseData()
      .then((data) => {
        setData(data);
        !data && pushWarning("No data found");
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setData, setLoading, pushError, pushWarning]);
};

// Auth Project Hooks
interface AuthProjectInputFieldsProps {
  messages: IAuthProjectMessages;
  setEmailMessage: (
    messages: IAuthProjectMessages,
    emailMessage: IMessage
  ) => void;
  setPasswordMessage: (
    messages: IAuthProjectMessages,
    passwordMessage: IMessage
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
  const labels = ["Username", "Password"];
  const patterns = [".{4,}", ".{4,}"];
  const [emailPattern, passwordPattern] = patterns.map(
    (pattern) => new RegExp(pattern)
  );
  const { emailMessage, passwordMessage } = messages;

  //functions to change inputs' states
  const getSuccess = (): IMessage => ({ message: null, type: "success" });
  const getError = (message: string | null): IMessage => ({
    message,
    type: "error",
  });
  const getWarning = (message: string | null): IMessage => ({
    message,
    type: "warning",
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
      : e.currentTarget.value === ""
      ? setEmailMsg(getError('Please, fill in the "Username" field'))
      : setEmailMsg(
          getWarning(
            'Please, provide the "Username" field with at least 4 symbols'
          )
        );
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    passwordPattern.test(e.currentTarget.value)
      ? setPasswordMsg(getSuccess())
      : e.currentTarget.value === ""
      ? setPasswordMsg(getError('Please, fill in the "Email" field'))
      : setPasswordMsg(
          getWarning(
            'Please, provide at least 4 symbols to the "Password" field'
          )
        );
  };

  const changeHandlers = [onEmailChange, onPasswordChange];

  //resulting array of inputs to render
  const inputFields: IFormInput[] = [
    {
      name: labels[0],
      valid: emailMessage.type === "success",
      invalid: emailMessage.type === "error",
      incorrect: emailMessage.type === "warning",
      value: username,
      type: "text",
      onChange: changeHandlers[0],
    },
    {
      name: labels[1],
      valid: passwordMessage.type === "success",
      invalid: passwordMessage.type === "error",
      incorrect: passwordMessage.type === "warning",
      value: password,
      type: "password",
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
    Object.values(messages).every((msg) => msg.type === "success")
      ? setValidated(true)
      : Object.values(messages)
          .filter((msg) => msg.type !== "success")
          .map((msg) =>
            msg.type === "error"
              ? pushError(msg.message)
              : pushWarning(msg.message)
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
    response.type === "error"
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
          setUsage("login");
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
            setCurrentUserInfo("Refresh the page to proceed");
          }
        })
        .catch((err) => pushError(err))
        .finally(() => {
          if (userExists) {
            reset();
            setUsage("loggedIn");
          }
        });
  };

  const logout = () =>
    services.authProjectService
      .logout()
      .then((response) => {
        if (response.status === 200) {
          setUserExists(false);
          setCurrentUserInfo("Refresh the page to proceed");
          pushSuccess("Your session has been finished!");
        }
      })
      .catch((err) => pushError(err))
      .finally(() => !userExists && setUsage("login"));

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
          `User role: ${response.data.user[0].role}`
        );
        setUsage("loggedIn");
      } else {
        setCurrentUserInfo("No user data is provided");
        setUsage("login");
      }
    });
  }, [setCurrentUserInfo, setUsage]);

  const submit =
    usage === "registration" ? register : usage === "login" ? login : undefined;

  return { submit, logout, checkAuth };
};

//Random Choice Picker Hooks
export const useChooseRandomTag = () => {
  const tagsRef: LegacyRef<HTMLDivElement> = useRef(null);
  const areaRef: LegacyRef<HTMLTextAreaElement> = useRef(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    createChoices(e.currentTarget.value);

    if (e.key === "Enter") {
      e.currentTarget.value = "";
      chooseRandomTag();
    }
  };

  const createChoices = (input: string) => {
    const tags = input
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    if (tagsRef.current) tagsRef.current.innerHTML = "";

    tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.classList.add("tag");
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
    tag?.classList.add("highlight");

  const unHighlightTag = (tag?: HTMLSpanElement) =>
    tag?.classList.remove("highlight");

  return { tagsRef, areaRef, handleKeyUp, chooseRandomTag };
};

export const useRandomChoicePickerOnMobile = (
  ref: RefObject<HTMLTextAreaElement>,
  callback: () => void
) => {
  return () => {
    if (!ref.current) return;
    ref.current.value = "";
    callback();
  };
};

//Animated Navigation Hooks
interface AnimatedNavigationProps
  extends IWithLoading,
    IWithError,
    IWithWarning {
  setData: (data: string[]) => void;
}

export const useFetchAnimatedNavigationData = ({
  setData,
  setLoading,
  pushError,
  pushWarning,
}: AnimatedNavigationProps) => {
  useEffect(() => {
    if (!setLoading) return;
    setLoading(true);

    services.portfolioItemsService
      .getAnimatedNavigationData()
      .then((data) => {
        setData(data);
        !data && pushWarning("No data found");
      })
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  }, [setData, setLoading, pushError, pushWarning]);
};

//Incrementing Counter Hooks
export const useIncrementingCounter = () => {
  const ref: LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerText = "0";

      const updateCounter = () => {
        //@ts-ignore
        const target = +ref.current.getAttribute("data-target");
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
      if (!setLoading) return;
      setLoading(true);

      services.portfolioItemsService
        .getMovieAppDataFromApi(url)
        .then((data) => {
          setMovies(data.results);
          data.results.length === 0 && pushWarning("No data found!");
        })
        .catch((e) => pushError(e))
        .finally(() => setLoading(false));
    },
    [setMovies, setLoading, pushError, pushWarning]
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

      if (searchTerm !== "") {
        getData(`${movieAppSearchApi}${searchTerm}`);

        searchRef.current.value = "";
      } else {
        window.location.reload();
      }
    }
  };

  return { searchRef, submit };
};

//Drink Water Hooks
export const useEstimateRemainedWater = () => {
  const litersRef: LegacyRef<HTMLSpanElement> = useRef(null);
  const remainedRef: LegacyRef<HTMLDivElement> = useRef(null);
  const percentageRef: LegacyRef<HTMLDivElement> = useRef(null);
  const cupRef: LegacyRef<HTMLDivElement> = useRef(null);

  const [cups, setCups] = useState<NodeListOf<HTMLDivElement>>();
  useEffect(() => {
    setCups(cupRef.current?.childNodes as NodeListOf<HTMLDivElement>);
  }, []);

  const fillCup = (idx: number) => {
    if (!cups) return;

    if (
      cups[idx].classList.contains("filled") &&
      !cups[idx].nextElementSibling?.classList.contains("filled")
    ) {
      idx--;
    }

    cups.forEach((cup, cupId) =>
      cupId <= idx
        ? cup.classList.add("filled")
        : cup.classList.remove("filled")
    );

    fillBigCup();
  };

  const fillBigCup = () => {
    if (
      !percentageRef.current ||
      !remainedRef.current ||
      !litersRef.current ||
      !cups
    )
      return;

    const filledCups: HTMLDivElement[] = [];
    cups?.forEach(
      (cup) => cup.classList.contains("filled") && filledCups.push(cup)
    );

    if (filledCups.length === 0) {
      percentageRef.current.style.height = "0";
    } else {
      percentageRef.current.style.height = `${
        (filledCups.length / cups.length) * (isMobile ? 16 : 24)
      }rem`;
      percentageRef.current.innerText = `${
        (filledCups.length / cups.length) * 100
      }%`;
    }

    if (filledCups.length === cups.length) {
      remainedRef.current.style.height = "0";
    } else if (cups.length - filledCups.length === 1 && isMobile) {
      remainedRef.current.style.flexFlow = "row wrap";
    } else {
      remainedRef.current.style.flexFlow = "column nowrap";
    }

    litersRef.current.innerText = `${2 - (250 * filledCups.length) / 1000}L`;
  };

  return { litersRef, remainedRef, percentageRef, cupRef, fillCup };
};

//Theme Clock Hooks
export const useSetTimeAndDate = () => {
  const hourRef: LegacyRef<HTMLDivElement> = useRef(null);
  const minuteRef: LegacyRef<HTMLDivElement> = useRef(null);
  const secondRef: LegacyRef<HTMLDivElement> = useRef(null);
  const timeRef: LegacyRef<HTMLDivElement> = useRef(null);
  const dateRef: LegacyRef<HTMLDivElement> = useRef(null);

  const scaleClockArrows = (
    num: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) => ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  const changeTimeValue = useCallback(
    (ref: RefObject<HTMLDivElement>, value: number, timeBorders: number[]) => {
      if (!ref.current) return;
      const [start, end] = timeBorders;

      ref.current.style.transform = `translate(-50%, -100%) rotate(${scaleClockArrows(
        value,
        start,
        end,
        0,
        360
      )}deg)`;
    },
    []
  );

  const setTime = useCallback(() => {
    if (!timeRef.current || !dateRef.current) return;

    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    changeTimeValue(hourRef, hours, [0, 11]);
    changeTimeValue(minuteRef, minutes, [0, 59]);
    changeTimeValue(secondRef, seconds, [0, 59]);

    timeRef.current.innerHTML = `${getDateValueWithZeros(
      hours
    )}:${getDateValueWithZeros(minutes)}`;
    dateRef.current.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  }, [changeTimeValue]);

  useEffect(() => setTime(), [setTime]);

  useEffect(() => {
    setInterval(setTime, SECOND);
  }, [setTime]);

  return { hourRef, minuteRef, secondRef, dateRef, timeRef };
};

//GitHub Profiles Hooks
interface GithubProfilesProps extends IWithLoading, IWithError, IWithWarning {
  setGithubProfilesData: (user: any) => void;
  setGithubProfilesReposData: (repos: any[]) => void;
}

export const useFetchGithubProfilesUserData = ({
  setGithubProfilesData,
  setGithubProfilesReposData,
  setLoading,
  pushError,
  pushWarning,
}: GithubProfilesProps) => {
  const [noUserFound, setNoUserFound] = useState(false);
  const [searchForAUser, setSearchForAUser] = useState(true);
  const searchRef: LegacyRef<HTMLInputElement> = useRef(null);

  const getUserAndRepos = (user: string) => {
    if (!setLoading) return;
    setLoading(true);

    services.portfolioItemsService
      .getGithubProfilesUserDataFromApi(user)
      .then((res) => {
        if (res.message === "Not Found") {
          setNoUserFound(true);
          pushWarning("No user found!");
        } else {
          setGithubProfilesData(res);
        }
      })
      .catch((e) => pushError(e))
      .finally(() => {
        setLoading(false);
        setSearchForAUser(false);
      });

    services.portfolioItemsService
      .getGithubProfilesReposDataFromApi(user)
      .then((res) =>
        res.message === "Not Found"
          ? pushWarning("No repositories found!")
          : setGithubProfilesReposData(res)
      )
      .catch((e) => pushError(e))
      .finally(() => setLoading(false));
  };

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchRef.current) {
      searchRef.current.value
        ? getUserAndRepos(searchRef.current.value)
        : pushWarning("Type a user's name!");

      searchRef.current.value = "";
    }

    noUserFound && setNoUserFound(false);
  };

  return { noUserFound, searchForAUser, searchRef, submitSearch };
};

//Password Generator Hooks
interface PasswordGeneratorProps
  extends IWithError,
    IWithWarning,
    IWithSuccess {
  setPasswordVal: (password: string) => void;
}

export const useGeneratePassword = ({
  setPasswordVal,
  pushError,
  pushWarning,
  pushSuccess,
}: PasswordGeneratorProps) => {
  const lengthRef: LegacyRef<HTMLInputElement> = useRef(null);
  const upperRef: LegacyRef<HTMLInputElement> = useRef(null);
  const lowerRef: LegacyRef<HTMLInputElement> = useRef(null);
  const numberRef: LegacyRef<HTMLInputElement> = useRef(null);
  const symbolRef: LegacyRef<HTMLInputElement> = useRef(null);
  const resultRef: LegacyRef<HTMLSpanElement> = useRef(null);

  const getRandomLower = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  const getRandomUpper = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const getRandomNumber = () =>
    String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  const getRandomSymbol = () => {
    const symbols = "!@#$%^&*()_{}[]=+<>/|,.?";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };
  const generationFuncs: any = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  const generate = () => {
    if (
      !lengthRef.current ||
      !upperRef.current ||
      !lowerRef.current ||
      !numberRef.current ||
      !symbolRef.current ||
      !resultRef.current
    )
      return;

    const length = +lengthRef.current.value;
    const hasProp = (prop: boolean) => (prop ? 1 : 0);
    const hasUpper = hasProp(upperRef.current.checked);
    const hasLower = hasProp(lowerRef.current.checked);
    const hasNumber = hasProp(numberRef.current.checked);
    const hasSymbol = hasProp(symbolRef.current.checked);

    resultRef.current.innerText = generatePassword(
      hasUpper,
      hasLower,
      hasNumber,
      hasSymbol,
      length
    );

    setPasswordVal("");
  };

  const generatePassword = (
    upper: number,
    lower: number,
    number: number,
    symbol: number,
    length: number
  ) => {
    let password = "";
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
      (type) => Object.values(type)[0]
    );

    if (typesCount === 0 || length === 0) {
      pushWarning("Please, provide password length and at least one parameter");
      return "";
    }

    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(
        //eslint-disable-next-line
        (type) => (password += generationFuncs[Object.keys(type)[0]]())
      );
    }

    return password.slice(0, length);
  };

  const copyPassword = () => {
    if (!resultRef.current || !resultRef.current.innerText) return;

    navigator.clipboard.writeText(resultRef.current.innerText);
    navigator.clipboard
      .readText()
      .then(
        (text) =>
          resultRef.current &&
          resultRef.current.innerText === text &&
          setPasswordVal(text)
      )
      .catch((e) => pushError(e))
      .finally(() => pushSuccess("The password is copied into the clipboard!"));
  };

  const decrease = () => {
    if (lengthRef.current) {
      let len = +lengthRef.current.value;
      len > 4 ? (len -= 1) : (len = 4);
      lengthRef.current.value = len.toString();
    }
  };

  const increase = () => {
    if (lengthRef.current) {
      let len = +lengthRef.current.value;
      !len ? (len = 4) : len < 20 ? (len += 1) : (len = 20);
      lengthRef.current.value = len.toString();
    }
  };

  useEffect(() => () => setPasswordVal(""), [setPasswordVal]);

  return {
    lengthRef,
    upperRef,
    lowerRef,
    numberRef,
    symbolRef,
    resultRef,
    generate,
    copyPassword,
    increase,
    decrease,
  };
};

//Notes App Hooks
interface NotesAppProps extends IWithLoading, IWithError, IWithSuccess {
  setNotes: (notes: INotesApp[]) => void;
}

export const useFetchNotesAppDataAndManageNotes = ({
  setNotes,
  setLoading,
  pushError,
  pushSuccess,
}: NotesAppProps) => {
  const request = useCallback(
    (req: Promise<any>) => req.then(setNotes).catch((e) => pushError(e)),
    [setNotes, pushError]
  );

  useEffect(() => {
    if (!setLoading) return;
    setLoading(true);

    request(services.notesAppService.getNotes()).finally(() =>
      setLoading(false)
    );
  }, [request, setNotes, setLoading, pushError]);

  const addNote = () => request(services.notesAppService.addNote());

  const renameNote = (note: INotesApp) =>
    request(services.notesAppService.renameNote(note));

  const editNote = (note: INotesApp) =>
    request(services.notesAppService.editNote(note));

  const saveNote = (note: INotesApp) =>
    request(
      services.notesAppService
        .saveNote(note)
        .finally(() =>
          pushSuccess(
            `Successfully saved note: ${
              note.title === "" ? "<No name provided>" : note.title
            }`
          )
        )
    );

  const removeNote = (id: string) =>
    request(services.notesAppService.removeNote(id));

  return {
    addNote,
    renameNote,
    editNote,
    saveNote,
    removeNote,
  };
};

export const useNotesAppInputs = (item: INotesApp) => {
  const [note, setNote] = useState(item.note);
  const [title, setTitle] = useState(item.title);

  const changeInput = (e: FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    setNote(e.currentTarget.value);
  };

  const changeTitle = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setTitle(e.currentTarget.value);
  };

  return { note, changeInput, title, changeTitle };
};

//Hoverboard Hooks
export const useHoverboard = () => {
  const wrapperRef: LegacyRef<HTMLDivElement> = useRef(null);

  const setColor = useCallback((square: HTMLDivElement) => {
    const color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }, []);

  const removeColor = useCallback((square: HTMLDivElement) => {
    square.style.background = "#1d1d1d";
    square.style.boxShadow = `0 0 2px #000`;
  }, []);

  const getRandomColor = () =>
    `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(
      Math.random() * 255 + 1
    )}, ${Math.floor(Math.random() * 255) + 1})`;

  useEffect(() => {
    Array.from({ length: isMobile ? 20 : 500 }).forEach((_) => {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", () => setColor(square));
      square.addEventListener("mouseout", () => removeColor(square));

      if (isMobile) {
        square.addEventListener("touchstart", () => setColor(square));
        square.addEventListener("touchend", () => removeColor(square));
      }

      wrapperRef.current?.appendChild(square);
    });
  }, [setColor, removeColor]);

  return wrapperRef;
};

//Testimonials Switcher Hooks
interface TestimonialsSwitcherProps
  extends IWithLoading,
    IWithError,
    IWithWarning {
  setData: (data: ITestimonialsSwitcher) => void;
}

export const useFetchTestimonialsSwitcherData = ({
  setData,
  setLoading,
  pushError,
  pushWarning,
}: TestimonialsSwitcherProps) => {
  const getTestimonial = useCallback(
    (id: number) => {
      if (!setLoading) return;
      setLoading(true);

      services.portfolioItemsService
        .getTestimonialsSwitcherDataById(id)
        .then((data) => {
          setData(data);
          !data && pushWarning("No data found");
        })
        .catch((e) => pushError(e))
        .finally(() => setLoading(false));
    },
    [setData, setLoading, pushError, pushWarning]
  );

  useEffect(() => {
    getTestimonial(0);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    let idx = 1;

    const interval = setInterval(() => {
      getTestimonial(idx);
      idx++;

      if (idx === 7) idx = 0;
    }, SECOND * 10);

    return () => {
      clearInterval(interval);
      idx = 0;
    };
  }, [getTestimonial]);
};

//Live Chat Hooks
interface LiveChatRoomManageProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  username: string;
  room: string;
  roomList: string[];
  setChatShown: (shown: boolean) => void;
  setRoomList: (list: string[]) => void;
}

export const useRoomManage = ({
  socket,
  username,
  room,
  roomList,
  setChatShown,
  setRoomList,
}: LiveChatRoomManageProps) => {
  const joinRoom = useCallback(() => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room, username);
      socket.emit("choose_room", room);
      if (!roomList.includes(room)) {
        setRoomList([...roomList, room]);
      }
      setChatShown(true);
    }
  }, [socket, username, room, roomList, setChatShown, setRoomList]);

  const leaveRoom = useCallback(() => {
    socket.emit("leave_room", room, username);
    setChatShown(false);
  }, [socket, username, room, setChatShown]);

  useEffect(() => {
    socket.on("room_chosen", (room) => {
      !roomList.includes(room) && setRoomList([...roomList, room]);
    });
  });

  const keysEventHandler = useCallback(
    (e: KeyboardEvent) => {
      e.key === "Enter" && joinRoom();
      e.key === "Escape" && leaveRoom();
    },
    [joinRoom, leaveRoom]
  );

  useEffect(() => {
    window.addEventListener("keydown", keysEventHandler);

    return () => window.removeEventListener("keydown", keysEventHandler);
  }, [keysEventHandler]);

  return { joinRoom, leaveRoom };
};

interface LiveChatManageProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  username: string;
  room: string;
  messageList: ILiveChat[];
  setMessageList: (list: ILiveChat[]) => void;
}

export const useChatManage = ({
  socket,
  username,
  room,
  messageList,
  setMessageList,
}: LiveChatManageProps) => {
  const [message, setMessage] = useState("");
  const [emojiActive, setEmojiActive] = useState(false);

  const onEmojiClick = (
    _e: React.MouseEvent<Element, MouseEvent>,
    emojiObj: IEmojiData
  ) => {
    setMessage(message + emojiObj.emoji);
  };

  const getUsername = (() => {
    if (username.includes(" ")) {
      const userArr = username.split(" ");
      const name = userArr[0];
      const surname = userArr[1].substr(0, 1);
      return name.concat(" ", surname, ".");
    } else {
      return username;
    }
  })();

  const getId = (() => {
    const symbols: string[] = [];
    for (let i = 0; i < 10; i++) {
      const symbol = String.fromCharCode(Math.floor(Math.random() * 94) + 32);
      symbols.push(symbol);
    }
    return symbols.join("");
  })();

  const sendMessage = () => {
    if (message !== "" && message.replaceAll(" ", "").length > 0) {
      const messageData: ILiveChat = {
        room,
        content: {
          id: getId,
          username: getUsername,
          message: message.trim(),
          time: `${
            (new Date(Date.now()).getHours() > 9 ? "" : "0") +
            new Date(Date.now()).getHours()
          }:${
            (new Date(Date.now()).getMinutes() > 9 ? "" : "0") +
            new Date(Date.now()).getMinutes()
          }`,
        },
      };

      socket.emit("send_message", messageData);
      setMessageList([...messageList, messageData]);
      setMessage("");

      isMobile && setEmojiActive(false);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) =>
      setMessageList([...messageList, data])
    );
  }, [socket, messageList, setMessageList]);

  return {
    emojiActive,
    setEmojiActive,
    onEmojiClick,

    message,
    getUsername,
    setMessage,
    sendMessage,
  };
};

//Todo App Hooks
interface AddTodosProps {
  todos: ITodoApp[];
  setTodos: (todos: ITodoApp[]) => void;

  inputValue: string;
  setInputValue: (value: string) => void;
}

export const useAddTodos = ({
  todos,
  setTodos,

  inputValue,
  setInputValue,
}: AddTodosProps) => {
  useEffect(() => {
    services.todoAppService.getTodos().then((data) => {
      setTodos(data);
    });
  }, [setTodos]);

  const addTodo = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e && e.preventDefault();

    if (inputValue !== "" && inputValue.replaceAll(" ", "").length > 0) {
      services.todoAppService
        .addTodo(inputValue.trim())
        .then(setTodos)
        .finally(() => setInputValue(""));
    }
  };

  return addTodo;
};

interface FilterTodosProps {
  todos: ITodoApp[];
  status: string;
  setFilteredTodos: (todos: ITodoApp[]) => void;
}

export const useFilterTodos = ({
  todos,
  status,
  setFilteredTodos,
}: FilterTodosProps) => {
  const filterTodos = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;

      case "in process":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(
    () => filterTodos(),
    //eslint-disable-next-line
    [todos, status]
  );
};

interface ManageTodoProps {
  todo: ITodoApp;
  setTodos: (todos: ITodoApp[]) => void;
  setHidden: (hidden: boolean) => void;
}

export const useManageTodo = ({
  todo,
  setTodos,
  setHidden,
}: ManageTodoProps) => {
  const [removed, setRemoved] = useState(false);

  const applyRemovedClass = (id: string) => setRemoved(true);

  const complete = () => {
    services.todoAppService.completeTodo(todo).then(setTodos);
  };

  const remove = () => {
    applyRemovedClass(todo._id);
    setHidden(true);

    setTimeout(
      () =>
        services.todoAppService
          .removeTodo(todo._id)
          .then(setTodos)
          .finally(() => setHidden(false)),
      SECOND * 3
    );
  };

  return { removed, complete, remove };
};

//Pomodoro Timer Hooks
interface PomodoroStartPauseStopProps {
  executing: IPomodoroTimer;
  setStartAnimate: (animate: boolean) => void;
  setTimerDisabled: (disabled: boolean) => void;
  setPlayerOpened: (opened: boolean) => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
}

export const useStartPauseStopTimer = ({
  executing,
  setStartAnimate,
  setTimerDisabled,
  setPlayerOpened,
  play,
  pause,
  stop,
}: PomodoroStartPauseStopProps) => {
  const startTimer = () => {
    setStartAnimate(true);
    executing.active === "work" && play();
  };

  const pauseTimer = () => {
    setStartAnimate(false);
    executing.active === "work" && pause();
  };

  const stopTimer = () => {
    setStartAnimate(false);
    setTimerDisabled(true);
    setPlayerOpened(false);
    stop();
  };

  return { startTimer, pauseTimer, stopTimer };
};

interface PomodoroTimerManageProps extends IWithWarning {
  executing: IPomodoroTimer;
  newTimer: IPomodoroTimer;
  setStartAnimate: (animate: boolean) => void;
  setTimerDisabled: (disabled: boolean) => void;
  setPlayerOpened: (opened: boolean) => void;
  setExecuting: (executing: IPomodoroTimer) => void;
  setPomodoro: (pomodoro: number) => void;
  stopTimer: () => void;
  stop: () => void;
}

export const useManageTimer = ({
  executing,
  newTimer,
  setStartAnimate,
  setTimerDisabled,
  setPlayerOpened,
  setExecuting,
  setPomodoro,
  stopTimer,
  stop,
  pushWarning,
}: PomodoroTimerManageProps) => {
  const settingBtn = () => {
    setStartAnimate(false);
    setTimerDisabled(false);
    setPlayerOpened(false);
    stop();
    setExecuting(initialPomodoroSettings);
    setPomodoro(0);
  };

  const updateExecute = (updatedSettings: IPomodoroTimer) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setCurrentTimer = (active: string) => {
    updateExecute({ ...executing, active });
    setTimerTime(executing);
  };

  const setTimerTime = (evaluate: IPomodoroTimer) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;

      case "short":
        setPomodoro(evaluate.short);
        break;

      case "long":
        setPomodoro(evaluate.long);
        break;

      default:
        setPomodoro(0);
        break;
    }
  };

  const changeTimer = (label: string) => {
    stopTimer();
    setCurrentTimer(label);
    if (executing.active !== label) {
      const toast = document.querySelector(".Toastify__toast-container")
        ?.children[0];
      //@ts-ignore
      toast && toast.click();
      setPlayerOpened(false);
      setTimerDisabled(false);
    }
  };

  const handleSubmit = (e?: FormEvent<HTMLButtonElement>) => {
    e && e.preventDefault();

    !Object.values(newTimer).includes(0)
      ? updateExecute(newTimer)
      : pushWarning(
          "Please, set all timers to values between 1 second and 1 hour"
        );
  };

  const countdown = ({ remainingTime }: TimeProps) => {
    if (!remainingTime) return "00:00";

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${getDateValueWithZeros(minutes)}:${getDateValueWithZeros(
      seconds
    )}`;
  };

  return {
    settingBtn,
    setCurrentTimer,
    updateExecute,
    changeTimer,
    handleSubmit,
    countdown,
  };
};

interface PomodoroSetTimerProps {
  newTimer: IPomodoroTimer;
  setNewTimer: (timer: IPomodoroTimer) => void;
}

export const useSetTimer = ({
  newTimer,
  setNewTimer,
}: PomodoroSetTimerProps) => {
  const [focused, setFocused] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (value.length > 5) return;

    const changeValue = (key: string) => {
      parseFloat(value) >= 0 && parseFloat(value) <= 60
        ? setNewTimer({ ...newTimer, [key]: parseFloat(value) })
        : parseFloat(value) > 60
        ? setNewTimer({ ...newTimer, [key]: 60 })
        : setNewTimer({ ...newTimer, [key]: 0 });
    };

    changeValue(name);
  };

  const incTimer = (key: string, value: number) =>
    value < 60 &&
    setNewTimer({
      ...newTimer,
      [key]:
        value > 59
          ? Math.floor(+(value + 1).toFixed(2))
          : +(value + 1).toFixed(2),
    });

  const decTimer = (key: string, value: number) =>
    value > 0 &&
    setNewTimer({
      ...newTimer,
      [key]:
        value < 1
          ? Math.ceil(+(value - 1).toFixed(2))
          : +(value - 1).toFixed(2),
    });

  return { focused, setFocused, handleChange, incTimer, decTimer };
};
