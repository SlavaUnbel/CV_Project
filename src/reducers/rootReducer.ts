import { combineReducers, Store } from 'redux';
import { authProjectReducer, AuthProjectState } from './authProjectReducer';
import { contactReducer, ContactState } from './contactReducer';
import { headerReducer, HeaderState } from './headerReducer';
import { loadingReducer, LoadingState } from './loadingReducer';
import { notesAppReducer, NotesAppState } from './notesAppReducer';
import { portfolioItemsReducer, PortfolioItemsState } from './portfolioItemsReducer';
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
  notesApp: NotesAppState;
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
  notesApp: notesAppReducer,
});