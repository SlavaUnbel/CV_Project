import React, { FC, useState } from 'react';
import { io } from 'socket.io-client';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import './live-chat.scss';
import Login from './login/Login';
import Room from './room/Room';
const socket = io('http://localhost:8081');

const LiveChat: FC = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [chatShown, setChatShown] = useState(false);
  const [messageList, setMessageList] = useState<any[]>([]);

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      if (username.includes(' ')) {
        const userArr = username.split(' ');
        const name = userArr[0];
        const surname = userArr[1].substr(0, 1);
        const fullName = name.concat(' ', surname, '.');
        setUsername(fullName);
      }

      const newUser = {
        id: Math.random(),
        room,
        username,
        notification: 'join',
      };
      socket.emit('join_room', newUser);
      setMessageList([...messageList, newUser]);
      setChatShown(true);
    }
  };

  const leaveRoom = () => {
    const userLeft = {
      id: Math.random(),
      room,
      username,
      notification: 'leave',
    };
    socket.emit('leave_room', userLeft);
    setMessageList([...messageList, userLeft]);
    setChatShown(false);
  };

  return (
    <ComponentWrapper>
      <div className="live-chat__container">
        {!chatShown ? (
          <Login
            setUsername={setUsername}
            setRoom={setRoom}
            onJoin={joinRoom}
          />
        ) : (
          <Room
            socket={socket}
            username={username}
            room={room}
            messageList={messageList}
            setMessageList={setMessageList}
            leaveRoom={leaveRoom}
          />
        )}
      </div>
    </ComponentWrapper>
  );
};

export default LiveChat;
