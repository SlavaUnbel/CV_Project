import { createSymbiote } from 'redux-symbiote';

export interface LiveChatState {
  username: string;
  room: string;
  chatShown: boolean;
  messageList: ILiveChat[];
  roomList: string[];
  roomChoice: boolean;
}

const initialLiveChatState: LiveChatState = {
  username: "",
  room: "",
  chatShown: false,
  messageList: [],
  roomList: [],
  roomChoice: false,
};

const symbiotes = {
  username: {
    set: (state: LiveChatState, username: string) => ({ ...state, username }),
  },
  room: {
    set: (state: LiveChatState, room: string) => ({ ...state, room }),
  },
  chatShown: {
    set: (state: LiveChatState, chatShown: boolean) => ({
      ...state,
      chatShown,
    }),
  },
  messageList: {
    set: (state: LiveChatState, messageList: ILiveChat[]) => ({
      ...state,
      messageList,
    }),
  },
  roomList: {
    set: (state: LiveChatState, roomList: string[]) => ({
      ...state,
      roomList,
    }),
  },
  roomChoice: {
    set: (state: LiveChatState, roomChoice: boolean) => ({
      ...state,
      roomChoice,
    }),
  },
};

export const { actions: liveChatActions, reducer: liveChatReducer } =
  createSymbiote(initialLiveChatState, symbiotes);
