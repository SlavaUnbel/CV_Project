import './live-chat.scss';

import React, { FC, useContext } from 'react';

import LiveChatRoomContext from '../../context/liveChat/LiveChatRoomContext';
import { LiveChatCtx } from '../../utils/context';
import ComponentWrapper from '../utils/componentWrapper/ComponentWrapper';
import Login from './login/Login';

const LiveChat: FC = () => {
  const { chatShown } = useContext(LiveChatCtx);

  return (
    <ComponentWrapper>
      <div className="live-chat__container">
        {!chatShown ? <Login /> : <LiveChatRoomContext />}
      </div>
    </ComponentWrapper>
  );
};

export default LiveChat;
