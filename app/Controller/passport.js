var LocalStrategy = require('passport-local').Strategy;

var FacebookStrategy = require('passport-facebook').Strategy;
var configAuth = require('./auth');
var User = require('../Model/user');
var Userr  	= require('../Model/customer');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  passport.deserializeUser(function(id, done) {
    Userr.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    Buisness_NameField: 'Buisness_name',
    Buisness_locationField: 'Buisness_location',
    Buisness_websiteField: 'Buisness_website',
    Created_atField: 'created_at',
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
          console.log(req.body.Buisness_location + "   location");
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
    Userr.findOne( {Flag : true } , { 'local.email':  email }, function(err, user) { //{Flag : true } ,
      if (err)
          return done(err);
      if (!user)
          return done(null, false, req.flash('loginMessage', 'No user found.'));
      if (!user.validPassword(password))
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
      return done(null, user);
    });
  })),
  passport.use(new FacebookStrategy({

      // pull in our app id and secret from our auth.js file
      clientID        : configAuth.facebookAuth.clientID,
      clientSecret    : configAuth.facebookAuth.clientSecret,
      callbackURL     : configAuth.facebookAuth.callbackURL,
       profileFields   : ['id', 'name', ['email']],

  },

  // facebook will send back the token and profile
  function(token, refreshToken, profile, done) {

      // asynchronous
      process.nextTick(function() {

          // find the user in the database based on their facebook id
          Userr.findOne({ 'facebook.id' : profile.id }, function(err, user) {

              // if there is an error, stop everything and return that
              // ie an error connecting to the database
              if (err)
                  return done(err);

              // if the user is found, then log them in
              if (user) {
                  return done(null, user); // user found, return that user
              } else {
                  // if there is no user found with that facebook id, create them
                  var newUser            = new User();

                  // set all of the facebook information in our user model
                  newUser.facebook.id    = profile.id; // set the users facebook id
                  newUser.facebook.token = token; // we will save the token that facebook provides to the user
                  newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                  newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                  // save our user to the database
                  newUser.save(function(err) {
                      if (err)
                          throw err;

                      // if successful, return the new user
                      return done(null, newUser);
                  });
              }

          });
      });

  }));




};
