import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ContactContext from '../../context/contact/ContactContext';
import { contactActions } from '../../reducers/contactReducer';
import { messageActions } from '../../reducers/messageReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  messages: state.contact.messages,
  validated: state.contact.validated,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNameMessage: bindActionCreators(contactActions.messages.setName, dispatch),
  setEmailMessage: bindActionCreators(contactActions.messages.setEmail, dispatch),
  setSubjectMessage: bindActionCreators(contactActions.messages.setSubject, dispatch),
  reset: bindActionCreators(contactActions.messages.reset, dispatch),
  setValidated: bindActionCreators(contactActions.validated.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
  pushWarning: bindActionCreators(messageActions.message.warning, dispatch),
  pushSuccess: bindActionCreators(messageActions.message.success, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactContext);