import React, { FC, useContext } from 'react';
import Room from '../../components/liveChat/room/Room';
import { LiveChatCtx, LiveChatRoomCtx } from '../../utils/context';
import { useChatManage } from '../../utils/hooks';

const LiveChatContext: FC = () => {
  const { socket, username, room, messageList, setMessageList } =
    useContext(LiveChatCtx);

  const {
    emojiActive,
    setEmojiActive,
    onEmojiClick,

    message,
    getUsername,
    setMessage,
    sendMessage,
  } = useChatManage({
    socket,
    username,
    room,
    messageList,
    setMessageList,
  });

  return (
    <LiveChatRoomCtx.Provider
      value={{
        emojiActive,
        setEmojiActive,
        onEmojiClick,

        message,
        setMessage,
        getUsername,
        sendMessage,
      }}
    >
      <Room />
    </LiveChatRoomCtx.Provider>
  );
};

export default LiveChatContext;
