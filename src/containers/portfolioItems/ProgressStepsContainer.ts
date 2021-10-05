import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ProgressSteps from '../../components/portfolioItems/progressSteps/PorgressSteps';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  progressStepsData: state.portfolioItems.progressStepsData,
  progressStepsWidth: state.portfolioItems.progressStepsWidth,
  currentProgressStep: state.portfolioItems.currentProgressStep,
  loading: state.loading.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProgressStepsData: bindActionCreators(
    portfolioItemsActions.progressSteps.set,
    dispatch,
  ),
  setProgressStepsWidth: bindActionCreators(
    portfolioItemsActions.progressSteps.setWidth,
    dispatch,
  ),
  setCurrentProgressStep: bindActionCreators(
    portfolioItemsActions.progressSteps.setCurrent,
    dispatch,
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressSteps);
