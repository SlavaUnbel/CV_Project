import React, { FC } from 'react';
import LiveChat from '../../components/liveChat/LiveChat';
import { LiveChatCtx } from '../../utils/context';
import { useWindowTitle } from '../../utils/hooks';

interface Props {}

const LiveChatContext: FC<Props> = () => {
  useWindowTitle('Live Chat');

  return (
    <LiveChatCtx.Provider value={{}}>
      <LiveChat />
    </LiveChatCtx.Provider>
  );
};

export default LiveChatContext;
