import Picker from 'emoji-picker-react';
import React, { FC, useContext } from 'react';

import { LiveChatRoomCtx } from '../../../../utils/context';

const EmojiPicker: FC = () => {
  const { onEmojiClick } = useContext(LiveChatRoomCtx);

  return (
    <Picker
      onEmojiClick={onEmojiClick}
      disableSearchBar
      groupNames={{ smileys_people: "PEOPLE" }}
    />
  );
};

export default EmojiPicker;
