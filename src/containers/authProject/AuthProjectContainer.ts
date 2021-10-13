import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import AuthProject from '../../components/authProject/AuthProject';
import { authProjectActions } from '../../reducers/authProjectReducer';
import { messageActions } from '../../reducers/messageReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  messages: state.authProject.messages,
  validated: state.authProject.validated,
  username: state.authProject.username,
  password: state.authProject.password,
  usage: state.authProject.usage
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setEmailMessage: bindActionCreators(authProjectActions.messages.setEmail, dispatch),
  setPasswordMessage: bindActionCreators(authProjectActions.messages.setPassword, dispatch),
  reset: bindActionCreators(authProjectActions.reset.reset, dispatch),
  setValidated: bindActionCreators(authProjectActions.validated.set, dispatch),
  setUsername: bindActionCreators(authProjectActions.userData.setUsername, dispatch),
  setPassword: bindActionCreators(authProjectActions.userData.setPassword, dispatch),
  setUsage: bindActionCreators(authProjectActions.usage.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
  pushSuccess: bindActionCreators(messageActions.message.success, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthProject);