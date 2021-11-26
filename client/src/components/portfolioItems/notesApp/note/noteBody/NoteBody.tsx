import React, { FC, useContext } from 'react';

import { NotesAppCtx } from '../../../../../utils/context';
import { useNotesAppInputs } from '../../../../../utils/hooks';

interface Props {
  item: INotesApp;
}

const NoteBody: FC<Props> = ({ item }) => {
  const { editNote } = useContext(NotesAppCtx);

  const { note, changeInput } = useNotesAppInputs(item);

  return (
    <>
      <div
        className={`main ${item.editing ? "hidden" : ""}`}
        onClick={() => editNote(item)}
      >
        {note}
      </div>

      <textarea
        className={`${item.editing ? "" : "hidden"}`}
        placeholder="Enter note"
        onChange={changeInput}
        value={note}
      />
    </>
  );
};

export default NoteBody;
