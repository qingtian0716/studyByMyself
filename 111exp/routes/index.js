var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express /tttttttttttt' });
});

app.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express index' });
});
app.get('/about', function(req, res) {
  //res.set('Content-Type', 'text/json; charset=utf-8')
  res.send('<a>About page</a>');
});

module.exports = app;
