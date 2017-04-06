var LocalStrategy = require('passport-local').Strategy;
var User = require('../Model/user');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    Buisness_NameField: 'Buisness_name',
    BuisnessLocationField: 'Buisness_location',
    BuisnessWebsiteField: 'Buisness_website',
    CreatedAtField: 'created_at',
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, email, password, done) {
    process.nextTick(function() {
      User.findOne({ 'local.email':  email }, function(err, user) {
        if (err)
            return done(err);
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {
          var newUser = new User();
          newUser.local.Buisness_name = req.body.Buisness_name;
          newUser.local.Buisness_location = req.body.Buisness_location;
          newUser.local.Buisness_website = req.body.Buisness_website;
          newUser.local.created_at = req.body.created_at;
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.save(function(err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, email, password, done) {
    User.findOne( {Flag : true } , { 'local.email':  email }, function(err, user) { //{Flag : true } , 
      if (err)
          return done(err);
      if (!user)
          return done(null, false, req.flash('loginMessage', 'No user found.'));
      if (!user.validPassword(password))
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
      return done(null, user);
    });
  }));




};
