const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

const authProject = require('./authProject/authProject')

app.use(express.json());
app.use(cors());

app.use('/authProject', authProject);

app.listen(PORT, () => {
  console.log('running server');
});
