const express = require('express');
const cors = require('cors');
const app = express();
const PORT_MAIN = 8080;
const PORT_SOCKET = 8081;
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  }),
);

//Auth Project Session and Cookies Config
const authProject = require('./authProject/authProject');
const sessionInit = require('./authProject/session');
sessionInit(app);
app.use('/authProject', authProject);

//Portfolio Items Router
const notesApp = require('./portfolioItems/notesApp');

app.use('/notesApp', notesApp);

//Live Chat Sockets Connection
const socket = require('./liveChat/socketsConfig')
socket(app, PORT_SOCKET)

app.listen(PORT_MAIN, () =>
  console.log(`server is running on port ${PORT_MAIN}`),
);
