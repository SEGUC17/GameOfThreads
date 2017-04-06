var express = require('express');
//Project attribute
var router = express.Router();

var passportC = require('passport');

var rateController = require('./controller/rateController');
var bodyParser = require('body-parser').json();
var bookController = require('./controller/bookController');

var servicesConfig = require('./Controller/serviceCONFIG.js');
var reviewsConfig = require('./Controller/reviewsConfig.js');

//Mirna w Henar

router.post('/rating',bodyParser,rateController.rateService);

router.post('/booking',bodyParser,bookController.book);


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

router.post('/reviews' , reviewsConfig.writeReview, function(req, res, next)
{
  console.log(" revieww addedd");
});

router.get('/reviews', function(req, res, next) {
  res.render('reviews');
  console.log("add The reviewss");
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

router.get('/login', function(req, res, next) {
  res.render('login' , { message: req.flash('loginMessage') });
  console.log("login");
});
router.get('/profile', function(req, res, next) {
  res.render('profile' , { user: req.user });
  console.log("view profile");
});
router.get('/myservices', servicesConfig.viewMyServices , function(req, res, next) {
  console.log("index got");
});


router.get('/delete/:id' , servicesConfig.DeleteService, function(req, res, next)
{
  console.log("deletted");
});

router.post('/login', passport.authenticate('local-login', {

  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,
}));


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}


module.exports = router;
