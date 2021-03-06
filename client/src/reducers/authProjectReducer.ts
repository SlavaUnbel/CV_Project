import { createSymbiote } from 'redux-symbiote';

import { getInitialMessagesForFormWaveAnimationInputFields } from '../services/databaseMethods';

export interface AuthProjectState {
  messages: IAuthProjectMessages;
  validated: boolean;
  username: string;
  password: string;
  usage: AuthProjectUsage;
  role: string;
  currentUserInfo: string;
  currentUserRole?: string;
}

const initialMessages = getInitialMessagesForFormWaveAnimationInputFields();

const initialAuthProjectState: AuthProjectState = {
  messages: initialMessages,
  validated: false,
  username: "",
  password: "",
  usage: "login",
  role: "visitor",
  currentUserInfo: "",
};

const symbiotes = {
  messages: {
    setEmail: (
      state: AuthProjectState,
      messages: IAuthProjectMessages,
      emailMessage: IMessage
    ) => ({ ...state, messages: { ...messages, emailMessage: emailMessage } }),
    setPassword: (
      state: AuthProjectState,
      messages: IAuthProjectMessages,
      passwordMessage: IMessage
    ) => ({
      ...state,
      messages: { ...messages, passwordMessage: passwordMessage },
    }),
  },
  reset: {
    reset: (state: AuthProjectState) => ({
      ...state,
      messages: initialMessages,
      validated: false,
      username: "",
      password: "",
    }),
  },
  validated: {
    set: (state: AuthProjectState, validated: boolean) => ({
      ...state,
      validated,
    }),
  },
  userData: {
    setUsername: (state: AuthProjectState, username: string) => ({
      ...state,
      username,
    }),
    setPassword: (state: AuthProjectState, password: string) => ({
      ...state,
      password,
    }),
  },
  usage: {
    set: (state: AuthProjectState, usage: AuthProjectUsage) => ({
      ...state,
      usage,
    }),
  },
  role: {
    set: (state: AuthProjectState, role: string) =>
      role === "visitor"
        ? { ...state, role: "moderator" }
        : { ...state, role: "visitor" },
  },
  currentUser: {
    set: (
      state: AuthProjectState,
      currentUserInfo: string,
      currentUserRole?: string
    ) => ({
      ...state,
      currentUserInfo,
      currentUserRole,
    }),
  },
};

export const { actions: authProjectActions, reducer: authProjectReducer } =
  createSymbiote(initialAuthProjectState, symbiotes);
