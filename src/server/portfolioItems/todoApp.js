const express = require('express');
const todoAppRouter = express.Router();

const db = require('../db/db');

const getTodos = (res) =>
  db.query('SELECT * FROM todos', (err, result) => {
    if (err) {
      res.send({ message: err, type: 'error' });
    } else {
      res.send(result);
    }
  });

todoAppRouter.get('/get', (_req, res) => getTodos(res));

todoAppRouter.post('/add', (req, res) =>
  db.query(
    'INSERT INTO todos (todo, completed) VALUES (?, ?)',
    [req.body.todo, false],
    (err) => {
      if (err) {
        res.send({ message: err, type: 'error' });
      } else {
        getTodos(res);
      }
    },
  ),
);

todoAppRouter.post('/complete', (req, res) =>
  db.query(
    'UPDATE todos SET completed = ? WHERE id = ?',
    [!req.body.completed, req.body.id],
    (err) => {
      if (err) {
        res.send({ message: err, type: 'error' });
      } else {
        getTodos(res);
      }
    },
  ),
);

todoAppRouter.post('/remove', (req, res) =>
  db.query('DELETE FROM todos WHERE id = ?', [req.body.id], (err) => {
    if (err) {
      res.send({ message: err, type: 'error' });
    } else {
      getTodos(res);
    }
  }),
);

module.exports = todoAppRouter;
