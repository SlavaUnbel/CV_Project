import React, { FC, useContext } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { LiveChatCtx, LiveChatRoomCtx } from '../../../../../utils/context';
import Message from './message/Message';

const MessageContainer: FC = () => {
  const { messageList, room } = useContext(LiveChatCtx);
  const { getUsername } = useContext(LiveChatRoomCtx);

  return (
    <ScrollToBottom className="message-container">
      {messageList.map(
        (msg) =>
          msg.room === room && (
            <div
              key={msg.content.id}
              className={`message ${
                getUsername === msg.content.username ? 'you' : 'other'
              }`}
            >
              <Message content={msg.content} />
            </div>
          ),
      )}
    </ScrollToBottom>
  );
};

export default MessageContainer;
