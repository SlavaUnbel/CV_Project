import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import FaqCollapse from '../../components/portfolioItems/faqCollapse/FaqCollapse';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  data: state.portfolioItems.faqCollapse,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getData: bindActionCreators(portfolioItemsActions.faqCollapse.get, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FaqCollapse);
