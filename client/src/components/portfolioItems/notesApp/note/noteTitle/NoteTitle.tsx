import React, { FC, useContext } from 'react';

import { NotesAppCtx } from '../../../../../utils/context';
import { useNotesAppInputs } from '../../../../../utils/hooks';

interface Props {
  item: INotesApp;
}

const NoteTitle: FC<Props> = ({ item }) => {
  const { renameNote } = useContext(NotesAppCtx);

  const { title, changeTitle } = useNotesAppInputs(item);

  return (
    <div className="title-wrapper">
      <div
        className={`title ${item.renaming ? "hidden" : ""}`}
        onClick={() => renameNote(item)}
      >
        {title}
      </div>

      <input
        className={`${item.renaming ? "" : "hidden"}`}
        placeholder="Enter title"
        onChange={changeTitle}
        onBlur={() => renameNote({ ...item, title })}
        value={title}
      />
    </div>
  );
};

export default NoteTitle;
