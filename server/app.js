'use strict';
const passport = require('passport-facebook');
const dotenv= require('dotenv');

dotenv.config();

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/login', function(req, res) {
  console.log('Login path was called. Here is app ID: ', process.env.FACEBOOK_APP_ID);
  res.send();
})

module.exports = app;