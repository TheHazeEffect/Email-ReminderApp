var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const compression = require('compression')
const helmet = require("helmet")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const reminderRouter = require('./routes/reminder')
var app = express();

app.use(helmet())
app.use(compression())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reminders',reminderRouter);


module.exports = app;
