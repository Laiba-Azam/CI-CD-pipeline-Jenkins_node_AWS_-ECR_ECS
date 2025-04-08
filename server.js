'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`hello world laiba azam succesful sample application Running on http://${HOST}:${PORT}`);
});
app.get('/health', (req, res) => {
  res.status(200).send('OK'); // Or a more detailed health check response
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
