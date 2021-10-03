import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Portfolio from '../../components/portfolio/Portfolio';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioActions } from '../../reducers/portfolioReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  loading: state.loading.loading,
  active: state.portfolio.selected,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  setActivePage: bindActionCreators(portfolioActions.selected.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);