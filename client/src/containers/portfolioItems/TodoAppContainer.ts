import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TodoAppContext from '../../context/portfolioItems/TodoAppContext';
import { portfolioItemsActions } from '../../reducers/portfolioItemsReducer';
import { IState } from '../../reducers/rootReducer';

const mapStateToProps = (state: IState) => ({
  todos: state.portfolioItems.todos,
  inputValue: state.portfolioItems.newTodo,
  filteredTodos: state.portfolioItems.filteredTodos,
  status: state.portfolioItems.todosStatus,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTodos: bindActionCreators(portfolioItemsActions.todos.get, dispatch),
  setTodos: bindActionCreators(portfolioItemsActions.todos.set, dispatch),
  completeTodo: bindActionCreators(
    portfolioItemsActions.todos.complete,
    dispatch
  ),
  removeTodo: bindActionCreators(portfolioItemsActions.todos.remove, dispatch),
  setInputValue: bindActionCreators(portfolioItemsActions.todos.add, dispatch),
  setFilteredTodos: bindActionCreators(
    portfolioItemsActions.todos.filter,
    dispatch
  ),
  setStatus: bindActionCreators(
    portfolioItemsActions.todos.setStatus,
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppContext);
