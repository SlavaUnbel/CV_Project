import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { FC, useContext } from 'react';

import { LiveChatCtx } from '../../../../utils/context';

const ChatHeader: FC = () => {
  const { room, leaveRoom } = useContext(LiveChatCtx);

  return (
    <div className="chat-header">
      Room: {room}
      <IconButton onClick={leaveRoom} className="btn">
        <Close />
      </IconButton>
    </div>
  );
};

export default ChatHeader;
