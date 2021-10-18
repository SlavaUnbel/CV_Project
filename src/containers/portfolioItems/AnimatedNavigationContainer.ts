import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import AnimatedNavigation from '../../components/portfolioItems/animatedNavigation/AnimatedNavigation';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  animatedNavigationData: state.portfolioItems.animatedNavigation,
  loading: state.loading.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAnimatedNavigationData: bindActionCreators(
    portfolioItemsActions.animatedNavigation.set,
    dispatch,
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.error, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedNavigation);
