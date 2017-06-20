"use strict"
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
var url = 'mongodb://localhost/libraries2';
var db = mongoose.connection;

mongoose.connect(url, (err, res)=>{
  if(err){
    console.log('something wrong while connecting to database', err);
  }
  console.log('connected on database ', url);
})

var customer = require('./routes/customer');
var transaction = require('./routes/transaction');
var book = require('./routes/book');

var app = express();

app.use(bodyParser, json());
app.use(bodyParser, urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/book', book);
app.use('/api/customer', customer);
app.use('/api/transaction', transaction);

app.listen(3000, ()=>{
  console.log('connected on port 3000');
})

module.exports = app;
