const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const authProject = require('./authProject/authProject');

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(cookieParser())
app.use(session({
  key: 'userId',
  secret: 'userCookie',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  }
}))

app.use('/authProject', authProject);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
