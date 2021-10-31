const express = require('express');
const notesAppRouter = express.Router();

const db = require('../db/db');

const getNotes = (res) =>
  db.query('SELECT * FROM notes', (err, result) => {
    if (err) {
      res.send({ message: err, type: 'error' });
    } else {
      res.send(result);
    }
  });

notesAppRouter.get('/get', (_req, res) => getNotes(res));

notesAppRouter.post('/add', (_req, res) =>
  db.query(
    'INSERT INTO notes (note, editing) VALUES (?, ?)',
    ['', true],
    (err) => {
      if (err) {
        res.send({ message: err, type: 'error' });
      } else {
        getNotes(res);
      }
    },
  ),
);

notesAppRouter.post('/edit', (req, res) =>
  db.query(
    'UPDATE notes SET note = ?, editing = ? WHERE id = ?',
    [req.body.note.note, !req.body.note.editing, req.body.note.id],
    (err) => {
      if (err) {
        res.send({ message: err, type: 'error' });
      } else {
        getNotes(res);
      }
    },
  ),
);

notesAppRouter.post('/remove', (req, res) =>
  db.query('DELETE FROM notes WHERE id = ?', [req.body.id], (err) => {
    if (err) {
      res.send({ message: err, type: 'error' });
    } else {
      getNotes(res);
    }
  }),
);

module.exports = notesAppRouter;
