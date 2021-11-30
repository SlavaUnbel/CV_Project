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
const authProject = require("./src/routes/authProject/authProject");
const sessionInit = require("./src/routes/authProject/session");
sessionInit(app);
app.use("/authProject", authProject);

//Portfolio Router
const portfolio = require("./src/routes/portfolio/portfolio");
app.use("/portfolio", portfolio);

//Portfolio Items Router
const portfolioItems = require("./src/routes/portfolioItems/portfolioItems");
app.use("/portfolioItem", portfolioItems);
const notesApp = require("./src/routes/portfolioItems/notesApp");
app.use("/notesApp", notesApp);
const todoApp = require("./src/routes/portfolioItems/todoApp");
app.use("/todoApp", todoApp);

//Live Chat Sockets Connection
const socket = require("./src/routes/liveChat/socketsConfig");
socket(app, process.env.SOCKET_PORT);

app.listen(process.env.BASE_PORT, () =>
  console.log(`server is running on port ${process.env.BASE_PORT}`)
);
