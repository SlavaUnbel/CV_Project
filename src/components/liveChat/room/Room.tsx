import { ArrowRight, Close } from '@mui/icons-material';
import React, { FC, useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import Button from '../../utils/button/Button';

interface Props {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  username: string;
  room: string;
  messageList: any[];
  setMessageList: (list: any[]) => void;
  leaveRoom: () => void;
}

const Room: FC<Props> = ({
  socket,
  username,
  room,
  messageList,
  setMessageList,
  leaveRoom,
}) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message !== '') {
      const messageData = {
        id: Math.random(),
        room,
        username,
        message,
        time: `${
          (new Date(Date.now()).getHours() > 9 ? '' : '0') +
          new Date(Date.now()).getHours()
        }:${
          (new Date(Date.now()).getMinutes() > 9 ? '' : '0') +
          new Date(Date.now()).getMinutes()
        }`,
      };

      socket.emit('send_message', messageData);
      setMessageList([...messageList, messageData]);
      setMessage('');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) =>
      setMessageList([...messageList, data]),
    );
  }, [socket, messageList, setMessageList]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        Live Chat
        <Button onClick={leaveRoom}>
          <Close />
        </Button>
      </div>

      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => (
            <div
              key={messageContent.id}
              className={`message ${
                messageContent.notification
                  ? ''
                  : username === messageContent.username
                  ? 'you'
                  : 'other'
              }`}
            >
              {messageContent.notification ? (
                <div className="new-user">
                  {username === messageContent.username
                    ? 'You have '
                    : `${messageContent.username} has `}
                  {messageContent.notification === 'join' ? 'joined ' : 'left '}
                  the room!
                </div>
              ) : (
                <div>
                  <div className="message-content">
                    {messageContent.message}
                  </div>
                  <div className="message-meta">
                    <p className="time">{messageContent.time}</p>
                    <p className="author">{messageContent.username}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ScrollToBottom>
      </div>

      <div className="chat-footer">
        <input
          type="text"
          value={message}
          placeholder="Type your message"
          onChange={(e) => setMessage(e.currentTarget.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />

        <Button onClick={sendMessage}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Room;
