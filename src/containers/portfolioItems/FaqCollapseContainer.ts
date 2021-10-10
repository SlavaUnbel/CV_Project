import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import FaqCollapse from '../../components/portfolioItems/faqCollapse/FaqCollapse';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  faqCollapseData: state.portfolioItems.faqCollapse,
  loading: state.loading.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFaqCollapseData: bindActionCreators(
    portfolioItemsActions.faqCollapse.set,
    dispatch,
  ),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FaqCollapse);