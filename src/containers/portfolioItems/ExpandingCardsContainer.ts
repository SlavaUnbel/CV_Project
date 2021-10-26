import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ExpandingCardsContext from '../../context/portfolioItems/ExpandingCardsContext';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  data: state.portfolioItems.expandingCards,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setData: bindActionCreators(
    portfolioItemsActions.expandingCards.set,
    dispatch,
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpandingCardsContext);
