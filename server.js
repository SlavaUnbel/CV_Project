const express = require('express')
const PORT = 5000;

const app = express()
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('src/assets'));
app.options('*', (req, res) => res.sendStatus(200));
app.listen(PORT, () => console.log(`app listens to ${PORT}`));
