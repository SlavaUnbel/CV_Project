import { combineReducers, Store } from 'redux';
import { contactReducer, ContactState } from './contactReducer';
import { headerReducer, HeaderState } from './headerReducer';
import { loadingReducer, LoadingState } from './loadingReducer';
import { portfolioReducer, PortfolioState } from './portfolioReducer';
import { worksReducer, WorksState } from './worksReducer';

export type IState = {
  header: HeaderState;
  loading: LoadingState;
  portfolio: PortfolioState;
  works: WorksState;
  contact: ContactState;
};

export type IStore = Store<IState>;

export default combineReducers({
  header: headerReducer,
  loading: loadingReducer,
  portfolio: portfolioReducer,
  works: worksReducer,
  contact: contactReducer,
});