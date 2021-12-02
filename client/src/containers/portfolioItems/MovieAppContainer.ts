import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import MovieAppContext from '../../context/portfolioItems/MovieAppContext';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  movies: state.portfolioItems.movies,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMovies: bindActionCreators(portfolioItemsActions.movies.get, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieAppContext);
