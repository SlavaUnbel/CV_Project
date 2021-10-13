const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'user',
  port: 3308,
  database: 'authproject',
});

app.post('/register', (req, res) => {
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
});

app.post('/login', (req, res) =>
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

app.listen(3001, () => {
  console.log('running server');
});
