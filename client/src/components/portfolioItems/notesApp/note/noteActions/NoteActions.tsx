import { Delete, Save } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { FC, useContext } from 'react';

import { NotesAppCtx } from '../../../../../utils/context';
import { useNotesAppInputs } from '../../../../../utils/hooks';

interface Props {
  item: INotesApp;
}

const NoteActions: FC<Props> = ({ item }) => {
  const { saveNote, removeNote } = useContext(NotesAppCtx);

  const { note, title } = useNotesAppInputs(item);

  return (
    <div className="actions">
      <IconButton
        className="edit"
        onClick={() => {
          saveNote({ ...item, note });
          item.title = title;
        }}
        disabled={!item.editing}
      >
        <Save className="icon" />
      </IconButton>

      <IconButton className="delete" onClick={() => removeNote(item._id)}>
        <Delete className="icon" />
      </IconButton>
    </div>
  );
};

export default NoteActions;
