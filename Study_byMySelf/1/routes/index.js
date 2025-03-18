var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//我们自己添加的/index路由
router.get('/index', function(req, res, next) {
  res.render('index111', { title: 'Index Page', message: '这是通过 /index 访问的页面' });
});


module.exports = router;
