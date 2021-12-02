import React, { FC, useEffect } from 'react';

import NotesApp from '../../components/portfolioItems/notesApp/NotesApp';
import { INotesAppContext, NotesAppCtx } from '../../utils/context';
import { useWindowTitle } from '../../utils/hooks';

const NotesAppContext: FC<INotesAppContext> = ({
  notes,
  getNotes,
  addNote,
  renameNote,
  editNote,
  saveNote,
  removeNote,
}) => {
  useWindowTitle("Notes App");

  useEffect(() => getNotes(), [getNotes]);

  return (
    <NotesAppCtx.Provider
      value={{
        notes,
        getNotes,
        addNote,
        renameNote,
        editNote,
        saveNote,
        removeNote,
      }}
    >
      <NotesApp />
    </NotesAppCtx.Provider>
  );
};

export default NotesAppContext;
