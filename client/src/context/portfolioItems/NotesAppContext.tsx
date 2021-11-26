import React, { FC } from 'react';

import NotesApp from '../../components/portfolioItems/notesApp/NotesApp';
import { NotesAppCtx } from '../../utils/context';
import { useFetchNotesAppDataAndManageNotes, useWindowTitle } from '../../utils/hooks';

interface Props extends IWithLoading, IWithError, IWithSuccess {
  notes: INotesApp[];
  setNotes: (notes: INotesApp[]) => void;
}

const NotesAppContext: FC<Props> = ({
  notes,
  setNotes,
  setLoading,

  pushError,
  pushSuccess,
}) => {
  useWindowTitle("Notes App");

  const { addNote, renameNote, editNote, saveNote, removeNote } =
    useFetchNotesAppDataAndManageNotes({
      setNotes,
      setLoading,
      pushError,
      pushSuccess,
    });

  return (
    <NotesAppCtx.Provider
      value={{
        notes,
        setNotes,
        setLoading,

        addNote,
        renameNote,
        editNote,
        saveNote,
        removeNote,

        pushError,
        pushSuccess,
      }}
    >
      <NotesApp />
    </NotesAppCtx.Provider>
  );
};

export default NotesAppContext;
