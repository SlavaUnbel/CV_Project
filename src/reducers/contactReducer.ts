import { createSymbiote } from 'redux-symbiote';
import { getInitialMessagesForContactInputFields } from '../services/mock/databaseMethods';

export interface ContactState {
  nameMessage: IMessage
  emailMessage: IMessage
  subjectMessage: IMessage;
  validated: boolean;
}

const initialMessages = getInitialMessagesForContactInputFields();

const initialContactState: ContactState = {
  nameMessage: initialMessages[0],
  emailMessage: initialMessages[1],
  subjectMessage: initialMessages[2],
  validated: false
}

const symbiotes = {
  nameMessage: {
    set: (state: ContactState, nameMessage: IMessage) => ({ ...state, nameMessage }),
    reset: (state: ContactState) => ({ ...state, nameMessage: initialMessages[0] }),
  },
  emailMessage: {
    set: (state: ContactState, emailMessage: IMessage) => ({ ...state, emailMessage }),
    reset: (state: ContactState) => ({ ...state, emailMessage: initialMessages[1] }),
  },
  subjectMessage: {
    set: (state: ContactState, subjectMessage: IMessage) => ({ ...state, subjectMessage }),
    reset: (state: ContactState) => ({ ...state, subjectMessage: initialMessages[2] }),
  },
  validated: {
    set: (state: ContactState, validated: boolean) => ({ ...state, validated })
  }
}

export const {
  actions: contactActions,
  reducer: contactReducer,
} = createSymbiote(initialContactState, symbiotes)