import React, { FC } from 'react';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import NewTodoInput from './newTodoInput/NewTodoInput';
import './todo-app.scss';
import TodoList from './todoList/TodoList';

const TodoApp: FC = () => {
  return (
    <ComponentWrapper>
      <div className="todo-app__container">
        <header>My Todo List</header>

        <NewTodoInput />

        <TodoList />
      </div>
    </ComponentWrapper>
  );
};

export default TodoApp;
