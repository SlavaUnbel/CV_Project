import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import MovieApp from '../../components/portfolioItems/movieApp/MovieApp';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  movies: state.portfolioItems.movies,
  loading: state.loading.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMovies: bindActionCreators(
    portfolioItemsActions.movies.set,
    dispatch,
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.error, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);
