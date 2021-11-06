import React, { FC, useContext } from 'react';
import { LiveChatCtx } from '../../../../utils/context';

const UsernameField: FC = () => {
  const { username, setUsername } = useContext(LiveChatCtx);

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Name..."
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
    </div>
  );
};

export default UsernameField;
