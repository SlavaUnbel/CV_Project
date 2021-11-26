const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [process.env.CLIENT_API],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose.connect(process.env.MONGODB_SECRET, { useNewUrlParser: true });

//Auth Project Session and Cookies Config
const authProject = require("./src/authProject/authProject");
const sessionInit = require("./src/authProject/session");

sessionInit(app);
app.use("/authProject", authProject);

//Portfolio Items Router
const notesApp = require("./src/portfolioItems/notesApp");
const todoApp = require("./src/portfolioItems/todoApp");

app.use("/notesApp", notesApp);
app.use("/todoApp", todoApp);

//Live Chat Sockets Connection
const socket = require("./src/liveChat/socketsConfig");
socket(app, process.env.SOCKET_PORT);

app.listen(process.env.BASE_PORT, () =>
  console.log(`server is running on port ${process.env.BASE_PORT}`)
);
