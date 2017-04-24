// load all the things we need
var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
//var configAuth       = require('./oauth');
// load up the user model
var Customer             = require('../Model/customer');

// expose this function to our app using module.exports
module.exports = function(passportC) {

  passportC.serializeUser(function(customer, done) {
    done(null, customer);
  });

  passportC.deserializeUser(function(customer, done) {
    done(null, customer);
  });

	passportC.use('local-loginCust', new LocalStrategy(
	  function(email, password, done) {
	    Customer.findOne({
	      email: email.toLowerCase()
	    }, function(err, customer) {
	      // if there are any errors, return the error before anything else
           if (err)
               return done(err);

           // if no user is found, return the message
           if (!customer)
               return done(null, false);

           // if the user is found but the password is wrong
           if (!customer.validPassword(password))
               return done(null, false);

           // all is well, return successful user
           return done(null, customer);
	    });
	  }
	));

};
