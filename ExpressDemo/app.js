var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

const userAPIRouter = require('./routes/api/User');
const productAPIRouter = require('./routes/api/Product');
const userCpanelRouter = require('./routes/Cpanel/Product');
const productCpanelRouter = require('./routes/Cpanel/Product');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// http://localhost:3000/
app.use('/', indexRouter);
// http://localhost:3000/api/user/
app.use('/api/user', userAPIRouter);
// http://localhost:3000/api/product/
app.use('/api/product', productAPIRouter);
// http://localhost:3000/cpanel/user/
app.use('/cpanel/users', userCpanelRouter);
// http://localhost:3000/cpanel/product/
app.use('/cpanel/product', productCpanelRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// http://localhost:3000/

// 2xx thành công
// 3xx redirection
// 4xx client lỗi
// 5xx server lỗi
