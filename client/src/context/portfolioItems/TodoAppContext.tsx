import React, { FC } from 'react';
import TodoApp from '../../components/portfolioItems/todoApp/TodoApp';
import { TodoAppCtx } from '../../utils/context';
import { useAddTodos, useFilterTodos, useWindowTitle } from '../../utils/hooks';

interface Props {
  todos: ITodoApp[];
  setTodos: (todos: ITodoApp[]) => void;

  inputValue: string;
  setInputValue: (value: string) => void;

  filteredTodos: ITodoApp[];
  setFilteredTodos: (todos: ITodoApp[]) => void;

  status: string;
  setStatus: (status: string) => void;
}

const TodoAppContext: FC<Props> = ({
  todos,
  setTodos,

  inputValue,
  setInputValue,

  filteredTodos,
  setFilteredTodos,

  status,
  setStatus,
}) => {
  useWindowTitle('ToDo App');

  const addTodo = useAddTodos({ todos, setTodos, inputValue, setInputValue });

  useFilterTodos({ todos, status, setFilteredTodos });

  return (
    <TodoAppCtx.Provider
      value={{
        todos,
        setTodos,

        inputValue,
        setInputValue,

        filteredTodos,
        setFilteredTodos,

        status,
        setStatus,

        addTodo,
      }}
    >
      <TodoApp />
    </TodoAppCtx.Provider>
  );
};

export default TodoAppContext;
