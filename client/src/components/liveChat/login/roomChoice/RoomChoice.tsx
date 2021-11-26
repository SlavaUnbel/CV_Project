import React, { FC, useContext } from 'react';

import { LiveChatCtx } from '../../../../utils/context';

const RoomChoice: FC = () => {
  const { roomList, setRoom, setRoomChoice } = useContext(LiveChatCtx);

  return (
    <div className="room-choice">
      {roomList.map((room) => (
        <div
          key={room}
          className="room"
          onClick={() => {
            setRoom(room);
            setRoomChoice(false);
          }}
        >
          Room: {room}
        </div>
      ))}
    </div>
  );
};

export default RoomChoice;
