import { combineReducers, Store } from 'redux';

import { audioPlayerReducer, AudioPlayerState } from './audioPlayerReducer';
import { authProjectReducer, AuthProjectState } from './authProjectReducer';
import { contactReducer, ContactState } from './contactReducer';
import { headerReducer, HeaderState } from './headerReducer';
import { liveChatReducer, LiveChatState } from './liveChatReducer';
import { loadingReducer, LoadingState } from './loadingReducer';
import { pomodoroTimerReducer, PomodoroTimerState } from './pomodoroTimerReducer';
import { portfolioItemsReducer, PortfolioItemsState } from './portfolioItemsReducer';
import { portfolioReducer, PortfolioState } from './portfolioReducer';

export type IState = {
  header: HeaderState;
  loading: LoadingState;
  portfolio: PortfolioState;
  contact: ContactState;
  portfolioItems: PortfolioItemsState;
  authProject: AuthProjectState;
  liveChat: LiveChatState;
  pomodoroTimer: PomodoroTimerState;
  audioPlayer: AudioPlayerState;
};

export type IStore = Store<IState>;

export default combineReducers({
  header: headerReducer,
  loading: loadingReducer,
  portfolio: portfolioReducer,
  contact: contactReducer,
  portfolioItems: portfolioItemsReducer,
  authProject: authProjectReducer,
  liveChat: liveChatReducer,
  pomodoroTimer: pomodoroTimerReducer,
  audioPlayer: audioPlayerReducer,
});
