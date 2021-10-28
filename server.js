require('dotenv').config();
const express = require('express');

const {
  MESSAGE = 'DEFAULT MESSAGE',
  PORT = 5000,
} = process.env;

const app = express();

app.use(express.static('public'));

app.get('/api', (req, res) => {
  console.log('MESSAGE', MESSAGE);
  res.status(200).send(MESSAGE);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}``)
});