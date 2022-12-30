var express = require('express');
var router = express.Router();

var usersRouter = require('./user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  next();
});

module.exports = {indexRouter: router, usersRouter};
