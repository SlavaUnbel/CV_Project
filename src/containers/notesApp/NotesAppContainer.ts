import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import NotesAppContext from '../../context/portfolioItems/NotesAppContext';
import { loadingActions } from '../../reducers/loadingReducer';
import { messageActions } from '../../reducers/messageReducer';
import { notesAppActions } from '../../reducers/notesAppReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  notes: state.notesApp.notes,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNotes: bindActionCreators(notesAppActions.notes.set, dispatch),
  setLoading: bindActionCreators(loadingActions.loading.set, dispatch),
  pushError: bindActionCreators(messageActions.message.error, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesAppContext);