import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TestimonialsSwitcher from '../../components/portfolioItems/testimonialsSwitcher/TestimonialsSwitcher';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  data: state.portfolioItems.testimonialsSwitcher,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getData: bindActionCreators(
    portfolioItemsActions.testimonialsSwitcher.get,
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestimonialsSwitcher);
