var User = require('./entities/User');

var routes = require('./endpoints');

var {USER_ID} = require('./constants/user');

routes.usersRouter.param(USER_ID, function(res, req, next, id) {
    User.setUserId(id);

    next();
});

module.exports = routes;