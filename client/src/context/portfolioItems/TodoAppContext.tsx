import React, { FC } from 'react';

import TodoApp from '../../components/portfolioItems/todoApp/TodoApp';
import { TodoAppCtx } from '../../utils/context';
import { useAddTodos, useFilterTodos, useWindowTitle } from '../../utils/hooks';

interface Props {
  todos: ITodoApp[];
  getTodos: () => void;
  setTodos: (todos: ITodoApp[]) => void;
  completeTodo: (todo: ITodoApp) => void;
  removeTodo: (id: string) => void;

  inputValue: string;
  setInputValue: (value: string) => void;

  filteredTodos: ITodoApp[];
  setFilteredTodos: (todos: ITodoApp[]) => void;

  status: string;
  setStatus: (status: string) => void;
}

const TodoAppContext: FC<Props> = ({
  todos,
  getTodos,
  setTodos,
  completeTodo,
  removeTodo,

  inputValue,
  setInputValue,

  filteredTodos,
  setFilteredTodos,

  status,
  setStatus,
}) => {
  useWindowTitle("ToDo App");

  const addTodo = useAddTodos({
    getTodos,
    setTodos,
    inputValue,
    setInputValue,
  });

  useFilterTodos({ todos, status, setFilteredTodos });

  return (
    <TodoAppCtx.Provider
      value={{
        todos,
        addTodo,
        completeTodo,
        removeTodo,

        inputValue,
        setInputValue,

        filteredTodos,
        setFilteredTodos,

        status,
        setStatus,
      }}
    >
      <TodoApp />
    </TodoAppCtx.Provider>
  );
};

export default TodoAppContext;
