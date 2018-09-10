'use strict';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var getSchedRouter = require('./routes/getSched');
var updateSchedRouter = require('./routes/updateSched');

var app = express();
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/schedDb'); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/getSched', getSchedRouter);
app.use('/updateSched', updateSchedRouter);

module.exports = app;
