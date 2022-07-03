var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const controllers = require('./controllers/index.js')
const router = require('./routes/index.js')
const port = 8000

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// const { test } = require('./controllers/test.js');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set("view engine", "ejs")
app.use(express.static("views"))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// app.get('/loginAdmin', controllers.auth.loginAdmin)
app.use('/', router.test)
app.use('/', router.admin)
app.use('/', router.dosen)
app.use('/', router.mahasiswa)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port, () =>
{
    console.log(`Server sudah berjalan di port ${port}`)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
