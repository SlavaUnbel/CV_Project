const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = require('../db/db');

router.post('/register', (req, res) =>
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      res.send({ message: err, type: 'error' });
    }

    db.query(
      'INSERT INTO users (username, password, role) VALUES (?,?,?)',
      [req.body.username, hash, req.body.role],
      (err) => {
        if (err) {
          res.send({ message: err, type: 'error' });
        } else {
          res.send({ message: 'You have successfully registered!' });
        }
      },
    );
  })
)

router.post('/login', (req, res) =>
  db.query(
    'SELECT * FROM users WHERE username = ?',
    req.body.username,
    (err, result) => {
      if (err) {
        res.send({ message: err, type: 'error' });
      } else {
        if (result.length > 0) {
          bcrypt.compare(
            req.body.password,
            result[0].password,
            (_error, response) => {
              if (response) {
                req.session.user = result;
                res.send({
                  message: `You are logged in as ${result[0].username}`,
                });
              } else {
                res.send({
                  message: 'Wrong username/password combination!',
                  type: 'error',
                });
              }
            },
          );
        } else {
          res.send({
            message: 'There is no such user in the database!',
            type: 'error',
          });
        }
      }
    },
  ),
);

router.get('/login', (req, res) =>
  req.session.user ?
    res.send({ loggedIn: true, user: req.session.user }) : res.send({ loggedIn: false }))

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('userId');
  res.sendStatus(200);
})

module.exports = router;
