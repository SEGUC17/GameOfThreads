var express = require('express');
//Project attribute
var router = express.Router();

var passportC = require('passport');

var servicesConfig = require('./Controller/serviceCONFIG.js');


router.get('/', function(req, res) {
  res.render('index');
  console.log("START");
});
router.get('/signupCust', function(req, res, next) {
  res.render('signupCust', { message: req.flash('loginMessage') });
  console.log("signup customer");
});

router.get('/loginCust', function(req, res, next) {
  res.render('logincust' , { message: req.flash('loginMessage') });
  console.log("login customer");
});



router.post('/signupCust', passportC.authenticate('local-signupC', {
  successRedirect: '/profileCust',
  failureRedirect: '/signupCust',
  failureFlash: true,
}));
router.post('/loginCust', passportC.authenticate('local-loginC', {

  successRedirect: '/profileCust',
  failureRedirect: '/loginCust',
  failureFlash: true,
}));



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}


module.exports = router;
