'use strict';
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/login', function(req, res) {
  console.log('Login path was called');
  res.send();
})

module.exports = app;