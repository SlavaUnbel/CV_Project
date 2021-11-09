import { combineReducers, Store } from 'redux';
import { authProjectReducer, AuthProjectState } from './authProjectReducer';
import { contactReducer, ContactState } from './contactReducer';
import { headerReducer, HeaderState } from './headerReducer';
import { liveChatReducer, LiveChatState } from './liveChatReducer';
import { loadingReducer, LoadingState } from './loadingReducer';
import {
  portfolioItemsReducer,
  PortfolioItemsState
} from './portfolioItemsReducer';
import { portfolioReducer, PortfolioState } from './portfolioReducer';
import { worksReducer, WorksState } from './worksReducer';

export type IState = {
  header: HeaderState;
  loading: LoadingState;
  portfolio: PortfolioState;
  works: WorksState;
  contact: ContactState;
  portfolioItems: PortfolioItemsState;
  authProject: AuthProjectState;
  liveChat: LiveChatState;
};

export type IStore = Store<IState>;

export default combineReducers({
  header: headerReducer,
  loading: loadingReducer,
  portfolio: portfolioReducer,
  works: worksReducer,
  contact: contactReducer,
  portfolioItems: portfolioItemsReducer,
  authProject: authProjectReducer,
  liveChat: liveChatReducer,
});
