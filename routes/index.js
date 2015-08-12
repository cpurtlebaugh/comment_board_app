var express = require('express');
var passport = require('passport');
var router = express.Router();

var sessionsController = require('../controllers/sessions')
var usersController = require('../controllers/users')

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {user: req.user});
});


// users controller routes
router.get('/register', usersController.register);

router.post('/register', usersController.submit);


// sessions controller routes
router.get('/login', sessionsController.login);

router.post('/login', passport.authenticate(
  'local', { failureRedirect: '/login'
  }), sessionsController.submitLogin);


router.get('/logout', sessionsController.logout);

router.get('/secret', isLoggedIn, sessionsController.secret);

// middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the login page
  res.redirect('/login');
}

module.exports = router;
