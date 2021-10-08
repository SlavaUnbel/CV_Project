import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import RotatingNavigation from '../../components/portfolioItems/rotatingNavigation/RotatingNavigation';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  rotatingNavigationData: state.portfolioItems.rotatingNavigation,
  loading: state.loading.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setRotatingNavigationData: bindActionCreators(
    portfolioItemsActions.rotatingNavigation.set,
    dispatch,
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RotatingNavigation);
