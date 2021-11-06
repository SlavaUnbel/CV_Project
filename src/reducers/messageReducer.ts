import { createSymbiote } from 'redux-symbiote';

export interface MessageState {
  count: number;
}

const initialMessageState: MessageState = {
  count: 5,
};

const symbiotes = {
  count: {
    set: (state: MessageState, count: number) => ({ ...state, count }),
  },
  message: {
    error: (state: MessageState, message: string | null) => ({ ...state }),
    success: (state: MessageState, message: string | null) => ({ ...state }),
    warning: (state: MessageState, message: string | null) => ({ ...state }),
    info: (state: MessageState, message: string | null) => ({ ...state }),
  },
};

export const {
  actions: messageActions,
  reducer: messageReducer,
} = createSymbiote(initialMessageState, symbiotes);