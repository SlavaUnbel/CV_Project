import { Delete, Edit, EditOff } from "@mui/icons-material";
import React, { FC, useContext } from "react";
import { NotesAppCtx } from "../../../../utils/context";
import { useNotesAppInput } from "../../../../utils/hooks";

interface Props {
  item: INotesApp;
}

const Note: FC<Props> = ({ item }) => {
  const { editNote, removeNote } = useContext(NotesAppCtx);

  const { note, changeInput } = useNotesAppInput(item);

  return (
    <div className="note">
      <div className="tools">
        <button className="edit" onClick={() => editNote({ ...item, note })}>
          {item.editing ? (
            <Edit className="icon" />
          ) : (
            <EditOff className="icon" />
          )}
        </button>

        <button className="delete" onClick={() => removeNote(item)}>
          <Delete className="icon" />
        </button>
      </div>

      <div className={`main ${item.editing ? "hidden" : ""}`}>{note}</div>

      <textarea
        className={`${item.editing ? "" : "hidden"}`}
        onInput={changeInput}
        value={note}
      />
    </div>
  );
};

export default Note;
