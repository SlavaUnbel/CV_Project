import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import PortfolioContext from '../../context/portfolio/PortfolioContext';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioActions } from '../../reducers/portfolioReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  data: state.portfolio.portfolioData,
  active: state.portfolio.selected,
  pagesCount: state.portfolio.pagesCount,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setData: bindActionCreators(portfolioActions.portfolioData.set, dispatch),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  setActivePage: bindActionCreators(portfolioActions.selected.set, dispatch),
  setPagesCount: bindActionCreators(portfolioActions.pagesCount.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContext);
