import React, { FC } from 'react';

import NoteActions from './noteActions/NoteActions';
import NoteBody from './noteBody/NoteBody';
import NoteTitle from './noteTitle/NoteTitle';

interface Props {
  item: INotesApp;
}

const Note: FC<Props> = ({ item }) => (
  <div className="note">
    <div className="tools">
      <NoteTitle item={item} />

      <NoteActions item={item} />
    </div>

    <NoteBody item={item} />
  </div>
);

export default Note;
