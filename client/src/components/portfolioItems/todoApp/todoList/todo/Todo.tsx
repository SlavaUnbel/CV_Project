import { Check, Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { FC, useContext } from 'react';

import { TodoAppCtx } from '../../../../../utils/context';
import { useManageTodo } from '../../../../../utils/hooks';

interface Props {
  todo: ITodoApp;
  setHidden: (hidden: boolean) => void;
}

const Todo: FC<Props> = ({ todo, setHidden }) => {
  const { completeTodo, removeTodo } = useContext(TodoAppCtx);

  const { removed, complete, remove } = useManageTodo({
    todo,
    setHidden,
    completeTodo,
    removeTodo,
  });

  return (
    <div className={`todo ${removed ? "removed" : ""}`}>
      <li className={`${todo.completed ? "completed" : ""}`}>{todo.todo}</li>

      <div className="btn-container">
        <IconButton className="complete-btn" onClick={complete}>
          <Check className="icon" />
        </IconButton>
      </div>

      <div className="btn-container">
        <IconButton className="trash-btn" onClick={remove}>
          <Delete className="icon" />
        </IconButton>
      </div>
    </div>
  );
};

export default Todo;
