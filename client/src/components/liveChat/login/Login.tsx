import React, { FC, useContext } from 'react';
import { LiveChatCtx } from '../../../utils/context';
import Button from '../../utils/button/Button';
import RoomChoice from './roomChoice/RoomChoice';
import RoomField from './roomField/RoomField';
import UsernameField from './usernameField/UsernameField';

const Login: FC = () => {
  const { roomChoice, setRoomChoice, joinRoom } = useContext(LiveChatCtx);

  return (
    <div className="live-chat__wrapper">
      <h3>{roomChoice ? 'Choose' : 'Join'} A Chat</h3>

      {roomChoice ? (
        <RoomChoice />
      ) : (
        <>
          <UsernameField />

          <RoomField />
        </>
      )}

      <Button onClick={!roomChoice ? joinRoom : () => setRoomChoice(false)}>
        {!roomChoice ? 'Join A Room' : 'Go Back'}
      </Button>
    </div>
  );
};

export default Login;
