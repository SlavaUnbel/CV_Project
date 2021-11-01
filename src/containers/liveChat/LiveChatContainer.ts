import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import LiveChatContext from '../../context/liveChat/LiveChatContext';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  // data: state.portfolioItems.animatedNavigation,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // setData: bindActionCreators(
  //   portfolioItemsActions.animatedNavigation.set,
  //   dispatch,
  // ),
  // setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  // pushError: bindActionCreators(messageActions.message.error, dispatch),
  // pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiveChatContext);
