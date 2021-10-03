import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Contact from '../../components/contact/Contact';
import { contactActions } from '../../reducers/contactReducer';
import { messageActions } from '../../reducers/messageReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  nameMessage: state.contact.nameMessage,
  emailMessage: state.contact.emailMessage,
  subjectMessage: state.contact.subjectMessage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNameMessage: bindActionCreators(contactActions.nameMessage.set, dispatch),
  resetNameMessage: bindActionCreators(contactActions.nameMessage.reset, dispatch),
  setEmailMessage: bindActionCreators(contactActions.emailMessage.set, dispatch),
  resetEmailMessage: bindActionCreators(contactActions.emailMessage.reset, dispatch),
  setSubjectMessage: bindActionCreators(contactActions.subjectMessage.set, dispatch),
  resetSubjectMessage: bindActionCreators(contactActions.subjectMessage.reset, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
  pushSuccess: bindActionCreators(messageActions.message.success, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);