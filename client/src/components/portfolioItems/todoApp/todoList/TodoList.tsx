import React, { FC, useContext, useState } from 'react';

import { TodoAppCtx } from '../../../../utils/context';
import Todo from './todo/Todo';

const TodoList: FC = () => {
  const { filteredTodos } = useContext(TodoAppCtx);

  const [hidden, setHidden] = useState(false);

  return (
    <div className="todo-container">
      <ul
        className="todo-list"
        style={{ overflow: hidden ? "hidden" : "auto" }}
      >
        {filteredTodos.map((todo) => (
          <Todo key={todo._id} todo={todo} setHidden={setHidden} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
