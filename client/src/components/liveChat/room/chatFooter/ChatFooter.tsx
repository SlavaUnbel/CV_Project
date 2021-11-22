import { TagFaces } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { FC, useContext } from 'react';
import { LiveChatRoomCtx } from '../../../../utils/context';
import Button from '../../../utils/button/Button';

const ChatFooter: FC = () => {
  const { emojiActive, setEmojiActive, message, setMessage, sendMessage } =
    useContext(LiveChatRoomCtx);

  return (
    <div className="chat-footer">
      <div className="input-field">
        <input
          type="text"
          value={message}
          placeholder="Type your message"
          onChange={(e) => setMessage(e.currentTarget.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />

        <IconButton
          onClick={() => setEmojiActive(!emojiActive)}
          style={{ color: emojiActive ? '#3f51b5' : '' }}
        >
          <TagFaces />
        </IconButton>
      </div>

      <div className="send-btn">
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default ChatFooter;
