import React, { FC } from 'react';

interface Props {
  content: ILiveChatMsg;
}

const Message: FC<Props> = ({ content }) => (
  <div>
    <div className="message-content">{content.message}</div>

    <div className="message-meta">
      <p className="time">{content.time}</p>
      <p className="author">{content.username}</p>
    </div>
  </div>
);

export default Message;
