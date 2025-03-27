var express = require('express');
var router = express.Router();
const userServer =require('../server/userServer')


/* GET home page. */
router.get('/', function(req, res, next) {
  const users =  userServer.query(req.query.name);
  res.json(users);
});

module.exports = router;
