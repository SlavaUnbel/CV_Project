const cookieParser = require('cookie-parser');
const session = require('express-session');

const sessionInit = (app) => {
  app.use(cookieParser());
  app.use(
    session({
      name: 'userId',
      secret: 'userCookie',
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 1000 * 60 * 60 * 24,
      },
    }),
  );
}

module.exports = sessionInit