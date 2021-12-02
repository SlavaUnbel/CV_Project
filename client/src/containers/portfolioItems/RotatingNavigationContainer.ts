import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RotatingNavigationContext from '../../context/portfolioItems/RotatingNavigationContext';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  data: state.portfolioItems.rotatingNavigation,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getData: bindActionCreators(
    portfolioItemsActions.rotatingNavigation.get,
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RotatingNavigationContext);
