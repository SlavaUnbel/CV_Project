const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'user',
  port: 3308,
  database: 'authproject',
});

module.exports = db;