import { List } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import React, { FC, useContext } from 'react';

import { LiveChatCtx } from '../../../../utils/context';

const RoomField: FC = () => {
  const { room, roomList, setRoom, setRoomChoice } = useContext(LiveChatCtx);

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Room ID..."
        value={room}
        onChange={(e) => setRoom(e.currentTarget.value)}
      />

      {roomList.length > 0 && (
        <Tooltip title="Choose from a list" placement="right">
          <IconButton onClick={() => setRoomChoice(true)}>
            <List />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

export default RoomField;
