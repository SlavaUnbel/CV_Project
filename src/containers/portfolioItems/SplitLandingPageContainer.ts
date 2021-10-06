import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import SplitLandingPage from '../../components/portfolioItems/splitLandingPage/SplitLandingPage';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  splitLandingPageData: state.portfolioItems.splitLandingPageData,
  loading: state.loading.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSplitLandingPageData: bindActionCreators(
    portfolioItemsActions.splitLandingPage.set,
    dispatch,
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplitLandingPage);
