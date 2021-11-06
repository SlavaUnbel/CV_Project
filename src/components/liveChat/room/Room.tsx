import React, { FC, useContext } from 'react';
import { isMobile } from '../../../utils/constants';
import { LiveChatRoomCtx } from '../../../utils/context';
import ChatBody from './chatBody/ChatBody';
import ChatFooter from './chatFooter/ChatFooter';
import ChatHeader from './chatHeader/ChatHeader';
import EmojiPicker from './emojiPicker/EmojiPicker';

const Room: FC = () => {
  const { emojiActive } = useContext(LiveChatRoomCtx);

  return (
    <div className={`chat ${emojiActive ? 'with-emoji' : ''}`}>
      <div className="chat-window">
        <ChatHeader />

        <ChatBody />

        <ChatFooter />
      </div>

      {!isMobile && <EmojiPicker />}
    </div>
  );
};

export default Room;
