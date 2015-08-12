var User = require('../models/User');

var login = function (req, res) {
  res.render('auth/login', {user : req.user});
};

var submitLogin = function (req, res, next) {
    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect('/');
    });
  };

var logout = function (req, res) {
  req.logout();
  res.redirect('/');
};

var secret = function (req, res) {
  res.render('secret', {user: req.user});
};



module.exports = {
  login: login,
  submitLogin: submitLogin,
  logout: logout,
  secret: secret
};
