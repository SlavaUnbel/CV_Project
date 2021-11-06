import React, { FC } from 'react';
import { io } from 'socket.io-client';
import LiveChat from '../../components/liveChat/LiveChat';
import { LiveChatCtx } from '../../utils/context';
import { useRoomManage, useWindowTitle } from '../../utils/hooks';

interface Props {
  username: string;
  setUsername: (username: string) => void;

  room: string;
  setRoom: (room: string) => void;

  chatShown: boolean;
  setChatShown: (shown: boolean) => void;

  messageList: ILiveChat[];
  setMessageList: (list: ILiveChat[]) => void;

  roomList: string[];
  setRoomList: (list: string[]) => void;

  roomChoice: boolean;
  setRoomChoice: (choice: boolean) => void;
}

const socket = io('http://localhost:8081');

const LiveChatContext: FC<Props> = ({
  username,
  setUsername,

  room,
  setRoom,

  chatShown,
  setChatShown,

  messageList,
  setMessageList,

  roomList,
  setRoomList,

  roomChoice,
  setRoomChoice,
}) => {
  useWindowTitle('Live Chat');

  const { joinRoom, leaveRoom } = useRoomManage({
    socket,
    room,
    username,
    roomList,
    setRoomList,
    setChatShown,
  });

  return (
    <LiveChatCtx.Provider
      value={{
        socket,

        username,
        setUsername,

        room,
        setRoom,

        chatShown,
        setChatShown,

        messageList,
        setMessageList,

        roomList,
        setRoomList,

        roomChoice,
        setRoomChoice,

        joinRoom,
        leaveRoom,
      }}
    >
      <LiveChat />
    </LiveChatCtx.Provider>
  );
};

export default LiveChatContext;
