const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    res.send({ auth: false, message: 'There is no Access Token!', type: 'error' })
  } else {
    jwt.verify(token, 'secretJWT', (err, decoded) => {
      if (err) {
        res.send({ auth: false, message: 'You failed to authenticate', type: 'error' })
      } else {
        req.userId = decoded.id;
        next();
      }
    })
  }
};

module.exports = verifyJWT;