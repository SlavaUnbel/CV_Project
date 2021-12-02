import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import NotesAppContext from '../../context/portfolioItems/NotesAppContext';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  notes: state.portfolioItems.notes,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getNotes: bindActionCreators(portfolioItemsActions.notes.get, dispatch),
  addNote: bindActionCreators(portfolioItemsActions.notes.add, dispatch),
  renameNote: bindActionCreators(portfolioItemsActions.notes.rename, dispatch),
  editNote: bindActionCreators(portfolioItemsActions.notes.edit, dispatch),
  saveNote: bindActionCreators(portfolioItemsActions.notes.save, dispatch),
  removeNote: bindActionCreators(portfolioItemsActions.notes.remove, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesAppContext);
