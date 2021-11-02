import React, { FC } from 'react';
import Button from '../../utils/button/Button';

interface Props {
  setUsername: (username: string) => void;
  setRoom: (room: string) => void;
  onJoin: () => void;
}

const Login: FC<Props> = ({ setUsername, setRoom, onJoin }) => {
  return (
    <div className="live-chat__wrapper">
      <h3>Join A Chat</h3>

      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="Room ID..."
        onChange={(e) => setRoom(e.currentTarget.value)}
      />

      <Button onClick={onJoin}>Join A Room</Button>
    </div>
  );
};

export default Login;
