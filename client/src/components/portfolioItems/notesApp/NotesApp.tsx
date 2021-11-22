import { Add } from '@mui/icons-material';
import React, { FC, useContext } from 'react';
import { NotesAppCtx } from '../../../utils/context';
import Button from '../../utils/button/Button';
import ComponentWrapper from '../../utils/componentWrapper/ComponentWrapper';
import LoaderWrapper from '../../utils/loaderWrapper/LoaderWrapper';
import Note from './note/Note';
import './notes-app.scss';

const NotesApp: FC = () => {
  const { notes, addNote } = useContext(NotesAppCtx);

  return (
    <ComponentWrapper>
      <div className="notes-app__container">
        <LoaderWrapper wrapperStyle={{ height: 'unset' }}>
          <Button className="add" onClick={addNote}>
            <Add className="icon" /> Add note
          </Button>

          {notes.map((note) => (
            <Note key={note.id} item={note} />
          ))}
        </LoaderWrapper>
      </div>
    </ComponentWrapper>
  );
};

export default NotesApp;
