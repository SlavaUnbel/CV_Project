import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import SplitLandingPageContext from '../../context/portfolioItems/SplitLandingPageContext';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  data: state.portfolioItems.splitLandingPage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setData: bindActionCreators(
    portfolioItemsActions.splitLandingPage.set,
    dispatch,
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplitLandingPageContext);
