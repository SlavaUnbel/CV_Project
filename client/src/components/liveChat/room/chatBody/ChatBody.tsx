import React, { FC, useContext } from 'react';
import { isMobile } from '../../../../utils/constants';
import { LiveChatRoomCtx } from '../../../../utils/context';
import EmojiPicker from '../emojiPicker/EmojiPicker';
import MessageContainer from './messageContainer/MessageContainer';

const ChatBody: FC = () => {
  const { emojiActive } = useContext(LiveChatRoomCtx);

  return (
    <div className={`chat-body ${isMobile && emojiActive ? 'with-emoji' : ''}`}>
      {(!emojiActive || !isMobile) && <MessageContainer />}

      {isMobile && <EmojiPicker />}
    </div>
  );
};

export default ChatBody;
