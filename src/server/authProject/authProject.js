const express = require('express');
const router = express.Router();

const db = require('../db/db');

router.post('/register', (req, res) => {
  db.query(
    'INSERT INTO users (username, password) VALUES (?,?)',
    [req.body.username, req.body.password],
    (err) => {
      if (err) {
        res.send({ message: err, type: 'error' });
      } else {
        res.send({ message: 'You have successfully registered!' });
      }
    },
  );
})

router.post('/login', (req, res) =>
  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [req.body.username, req.body.password],
    (err, result) => {
      if (err) {
        res.send({ message: err, type: 'error' });
      } else {
        if (result.length > 0) {
          res.send({ message: `You are logged in as ${result[0].username}` });
        } else {
          res.send({
            message: 'Wrong username/password combination!',
            type: 'error',
          });
        }
      }
    },
  ),
);

module.exports = router;