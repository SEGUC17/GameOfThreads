var LocalStrategyC = require('passport-local').Strategy;
var Customer = require('../Model/customer.js');

module.exports = function(passportC) {

  passportC.serializeUser(function(customer, done) {
    done(null, customer.id);
  });

  passportC.deserializeUser(function(id, done) {
    User.findById(id, function(err, customer) {
      done(err, customer);
    });
  });

  passportC.use('local-signupC', new LocalStrategyC({
    NameField: 'Name',
    AddressField: 'Address',
    phoneNumberField: 'PhoneNumber',
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, email, password, done) {
    process.nextTick(function() {
      Customer.findOne({ 'local.email':  email }, function(err, customer) {
        if (err)
            return done(err);
        if (customer) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {
          var newCustomer = new Customer();
          newCustomer.local.Name = req.body.Name;
          newCustomer.local.Address = req.body.Address;
          newCustomer.local.PhoneNumber = req.body.PhoneNumber;
          newCustomer.local.email = email;
          newCustomer.local.password = newCustomer.generateHash(password);
          newCustomer.save(function(err) {
            if (err)
              throw err;
            return done(null, newCustomer);
          });
        }
      });
    });
  }));

  passportC.use('local-loginC', new LocalStrategyC({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, email, password, done) {
    Customer.findOne({ 'local.email':  email }, function(err, customer) {
      if (err)
          return done(err);
      if (!customer)
          return done(null, false, req.flash('loginMessage', 'No user found.'));
      if (!customer.validPassword(password))
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
      return done(null, customer);
    });
  }));

};
