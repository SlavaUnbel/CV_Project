import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import DadJokes from '../../components/portfolioItems/dadJokes/DadJokes';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  data: state.portfolioItems.dadJokes,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getData: bindActionCreators(portfolioItemsActions.dadJokes.get, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DadJokes);
