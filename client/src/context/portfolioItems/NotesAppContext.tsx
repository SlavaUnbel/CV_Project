import React, { FC } from "react";
import NotesApp from "../../components/portfolioItems/notesApp/NotesApp";
import { NotesAppCtx } from "../../utils/context";
import {
  useFetchNotesAppDataAndManageNotes,
  useWindowTitle,
} from "../../utils/hooks";

interface Props extends IWithLoading, IWithError {
  notes: INotesApp[];
  setNotes: (notes: INotesApp[]) => void;
}

const NotesAppContext: FC<Props> = ({
  notes,
  setNotes,
  setLoading,

  pushError,
}) => {
  useWindowTitle("Notes App");

  const { addNote, editNote, removeNote } = useFetchNotesAppDataAndManageNotes({
    setNotes,
    setLoading,
    pushError,
  });

  return (
    <NotesAppCtx.Provider
      value={{
        notes,
        setNotes,
        setLoading,

        pushError,

        addNote,
        editNote,
        removeNote,
      }}
    >
      <NotesApp />
    </NotesAppCtx.Provider>
  );
};

export default NotesAppContext;
