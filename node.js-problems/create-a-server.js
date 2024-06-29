require('dotenv').config;
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server running on http://127.0.0.1:${port}`);
  }
});