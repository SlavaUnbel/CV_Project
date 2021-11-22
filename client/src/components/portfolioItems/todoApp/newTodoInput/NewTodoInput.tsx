import { Add } from '@mui/icons-material';
import React, { FC, useContext } from 'react';
import { TodoAppCtx } from '../../../../utils/context';
import Button from '../../../utils/button/Button';

const NewTodoInput: FC = () => {
  const { inputValue, setInputValue, status, setStatus, addTodo } =
    useContext(TodoAppCtx);

  return (
    <form>
      <input
        placeholder="Type your todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />

      <Button onClick={(e) => addTodo(e)}>
        <Add />
      </Button>

      <div className="filter">
        <select
          value={status}
          onChange={(e) => setStatus(e.currentTarget.value)}
          name="todos"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="in process">In process</option>
        </select>
      </div>
    </form>
  );
};

export default NewTodoInput;
