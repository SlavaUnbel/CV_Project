const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AuthProjectModel = require("../models/AuthProject");
const verifyJWT = require("./verifyJWT");
const authRouter = express.Router();
const saltRounds = 10;

authRouter.post("/register", (req, res) =>
  bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
    if (err) {
      res.send({ message: err, type: "error" });
    }

    const username = req.body.username;
    const password = hash;
    const role = req.body.role;

    try {
      await AuthProjectModel.collection.insertOne({ username, password, role });
      res.send({ message: "You have successfully registered!" });
    } catch {
      res.send({ message: "Failed to register a new user", type: "error" });
    }
  })
);

authRouter.post("/login", async (req, res) => {
  const username = req.body.username;

  try {
    const users = await (async () =>
      AuthProjectModel.collection.find({ username }).toArray())();

    if (users.length > 0) {
      bcrypt.compare(req.body.password, users[0].password, (_, response) => {
        if (response) {
          const id = users[0].id;
          const token = jwt.sign({ id }, "secretJWT", {
            expiresIn: 300,
          });

          req.session.user = users;

          res.send({
            auth: true,
            token,
            users,
            message: `You are logged in as "${users[0].username}"`,
          });
        } else {
          res.send({
            auth: false,
            message: "Wrong username/password combination!",
            type: "error",
          });
        }
      });
    } else {
      res.send({
        auth: false,
        message: "There is no such user in the database!",
        type: "error",
      });
    }
  } catch {
    res.send({
      auth: false,
      message: "Failed to login",
      type: "error",
    });
  }
});

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
