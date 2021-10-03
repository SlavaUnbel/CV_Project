import { createSymbiote } from 'redux-symbiote';
import { getInitialMessagesForContactInputFields } from '../services/mock/databaseMethods';

export interface ContactState {
  messages: IMessages
  validated: boolean;
}

const initialMessages = getInitialMessagesForContactInputFields();

const initialContactState: ContactState = {
  messages: initialMessages,
  validated: false
}

const symbiotes = {
  messages: {
    setName: (state: ContactState, messages: IMessages, nameMessage: IMessage) => ({ ...state, messages: { ...messages, nameMessage: nameMessage } }),
    setEmail: (state: ContactState, messages: IMessages, emailMessage: IMessage) => ({ ...state, messages: { ...messages, emailMessage: emailMessage } }),
    setSubject: (state: ContactState, messages: IMessages, subjectMessage: IMessage) => ({ ...state, messages: { ...messages, subjectMessage: subjectMessage } }),
    reset: (state: ContactState) => ({ ...state, messages: initialMessages })
  },
  // nameMessage: {
  //   set: (state: ContactState, nameMessage: IMessage) => ({ ...state, nameMessage }),
  //   reset: (state: ContactState) => ({ ...state, nameMessage: initialMessages[0] }),
  // },
  // emailMessage: {
  //   set: (state: ContactState, emailMessage: IMessage) => ({ ...state, emailMessage }),
  //   reset: (state: ContactState) => ({ ...state, emailMessage: initialMessages[1] }),
  // },
  // subjectMessage: {
  //   set: (state: ContactState, subjectMessage: IMessage) => ({ ...state, subjectMessage }),
  //   reset: (state: ContactState) => ({ ...state, subjectMessage: initialMessages[2] }),
  // },
  validated: {
    set: (state: ContactState, validated: boolean) => ({ ...state, validated })
  }
}

export const {
  actions: contactActions,
  reducer: contactReducer,
} = createSymbiote(initialContactState, symbiotes)