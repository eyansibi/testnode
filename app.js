var express = require('express');
var path = require('path');
var db = require('./database/database.js')

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var osRouter = require('./routes/os');
var productsRouter = require('./routes/products');
var formRouter= require('./routes/form');
var HotelRouter= require('./routes/hotel');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(express.json());
app.use(express.urlencoded());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/os', osRouter);
app.use('/products', productsRouter);
app.use('/form', formRouter);
app.use('/form', HotelRouter);




module.exports = app;
