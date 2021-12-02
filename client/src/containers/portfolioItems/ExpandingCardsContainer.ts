import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ExpandingCards from '../../components/portfolioItems/expandingCards/ExpandingCards';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  data: state.portfolioItems.expandingCards,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getData: bindActionCreators(
    portfolioItemsActions.expandingCards.get,
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpandingCards);
