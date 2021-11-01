import React, { FC, useState } from 'react';
import { io } from 'socket.io-client';
import Button from '../utils/button/Button';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
const socket = io('http://localhost:8081');

const LiveChat: FC = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room);
    }
  };

  return (
    <ComponentWrapper>
      <div className="live-chat__container">
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

        <Button onClick={joinRoom}>Join A Room</Button>
      </div>
    </ComponentWrapper>
  );
};

export default LiveChat;
