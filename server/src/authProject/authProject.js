const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const db = require("../db/db");
const verifyJWT = require("./verifyJWT");

authRouter.post("/register", (req, res) =>
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      res.send({ message: err, type: "error" });
    }

    db.query(
      "INSERT INTO users (username, password, role) VALUES (?,?,?)",
      [req.body.username, hash, req.body.role],
      (err) => {
        if (err) {
          res.send({ message: err, type: "error" });
        } else {
          res.send({ message: "You have successfully registered!" });
        }
      }
    );
  })
);

authRouter.post("/login", (req, res) =>
  db.query(
    "SELECT * FROM users WHERE username = ?",
    req.body.username,
    (err, result) => {
      if (err) {
        res.send({ message: err, type: "error" });
      } else {
        if (result.length > 0) {
          bcrypt.compare(
            req.body.password,
            result[0].password,
            (_error, response) => {
              if (response) {
                const id = result[0].id;
                const token = jwt.sign({ id }, "secretJWT", {
                  expiresIn: 300,
                });

                req.session.user = result;

                res.send({
                  auth: true,
                  token,
                  result,
                  message: `You are logged in as "${result[0].username}"`,
                });
              } else {
                res.send({
                  auth: false,
                  message: "Wrong username/password combination!",
                  type: "error",
                });
              }
            }
          );
        } else {
          res.send({
            auth: false,
            message: "There is no such user in the database!",
            type: "error",
          });
        }
      }
    }
  )
);

authRouter.get("/authenticated", verifyJWT, (req, res) => {
  req.headers["x-access-token"] &&
    res.send({ message: "You are authenticated!" });
});

authRouter.get("/login", (req, res) =>
  req.session.user
    ? res.send({ loggedIn: true, user: req.session.user })
    : res.send({ loggedIn: false })
);

authRouter.post("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("userId");
  res.sendStatus(res.statusCode);
});

module.exports = authRouter;
