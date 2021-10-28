import { Add } from '@mui/icons-material';
import React, { FC, useContext } from 'react';
import { NotesAppCtx } from '../../../utils/context';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import Note from './note/Note';
import './notes-app.scss';

const NotesApp: FC = () => {
  const { notes, addNote } = useContext(NotesAppCtx);

  return (
    <ComponentWrapper>
      <div className="notes-app__container">
        <Button className="add" onClick={addNote}>
          <Add className="icon" /> Add note
        </Button>

        {notes.map((note) => (
          <Note key={note.id} item={note} />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default NotesApp;
