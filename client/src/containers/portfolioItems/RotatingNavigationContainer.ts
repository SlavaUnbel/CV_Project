import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import RotatingNavigationContext from '../../context/portfolioItems/RotatingNavigationContext';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  data: state.portfolioItems.rotatingNavigation,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setData: bindActionCreators(
    portfolioItemsActions.rotatingNavigation.set,
    dispatch,
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RotatingNavigationContext);
