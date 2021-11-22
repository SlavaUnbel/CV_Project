const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT_MAIN = 8080;
const PORT_SOCKET = 8081;
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

mongoose.connect(
  "mongodb+srv://SlavaUnbel:Unbelievable19@cluster0.kehgh.mongodb.net/cvproject",
  { useNewUrlParser: true }
);

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
socket(app, PORT_SOCKET);

app.listen(PORT_MAIN, () =>
  console.log(`server is running on port ${PORT_MAIN}`)
);
