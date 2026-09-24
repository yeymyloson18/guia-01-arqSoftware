const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola, Arquitectura de Software');
});

module.exports = app;