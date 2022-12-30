var express = require('express');
var router = express.Router();

const users = [{name: 'Ivan', id: 1}, {name: 'Ilia', id: 2}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('list', {title: 'Users', list: users});
});

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
  const userId = req.params.userId;
  const user = users.find(({id}) => id == userId)

  if (!user) {
    res.render('error');

    return;
  }

  res.render('index', {title: user.name});
});

/* GET users listing. */
router.get('/:userId/info', function(req, res, next) {
  const userId = req.params.userId;
  const isValidId = users.find(({id}) => id == userId);

  res.locals.isValidId = isValidId;
  res.locals.userId = userId;

  next();
}, function(req, res, next) {
  const {isValidId, userId} = res.locals;
  
  if (!isValidId) {
    res.redirect('/');
    return;
  }
  
  next();
});

module.exports = router;
