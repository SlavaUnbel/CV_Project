import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import DadJokes from '../../components/portfolioItems/dadJokes/DadJokes';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  data: state.portfolioItems.dadJokes,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDadJokesData: bindActionCreators(
    portfolioItemsActions.dadJokes.set,
    dispatch,
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DadJokes);
