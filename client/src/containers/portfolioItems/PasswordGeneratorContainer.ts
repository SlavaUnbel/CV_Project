import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import PasswordGeneratorContext from '../../context/portfolioItems/PasswordGeneratorContext';
import { messageActions } from '../../reducers/messageReducer';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  passwordVal: state.portfolioItems.passwordGenerator,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPasswordVal: bindActionCreators(
    portfolioItemsActions.passwordGenerator.set,
    dispatch,
  ),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
  pushSuccess: bindActionCreators(messageActions.message.success, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordGeneratorContext);
