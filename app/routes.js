var express = require('express');
//Project attribute
var router = express.Router();

var passport = require('passport');
var passportC = require('passport');

var rateController = require('./controller/rateController');
var bodyParser = require('body-parser').json();
var bookController = require('./controller/bookController');

var servicesConfig = require('./Controller/serviceCONFIG.js');
var reviewsConfig = require('./Controller/reviewsConfig.js');
var Request = require("./Controller/Requests.js");

//Mirna w Henar

router.post('/rating',bodyParser,rateController.rateService);

router.post('/booking',bodyParser,bookController.book);


router.get('/', function(req, res) {
  res.render('index');
  console.log("START");
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { message: req.flash('loginMessage') });
  console.log("signup");
});

router.get('/login', function(req, res, next) {
  res.render('login' , { message: req.flash('loginMessage') });
  console.log("login");
});
router.get('/profile' , function(req, res, next) {
  res.render('profile' , { user: req.user });
  console.log("view profile");
});

router.get('/myservices', servicesConfig.viewMyServices  , function(req, res, next) {
  console.log("index got");
});
router.get('/allservices', servicesConfig.getAllServices , function(req, res, next) {
  console.log("index got");
});

router.post('/service' , servicesConfig.postMyService ,  function(req, res, next)
{
  console.log("addedd");
});

router.get('/delete/:id' , servicesConfig.DeleteService, function(req, res, next)
{
  console.log("deletted");
});

router.get('/addServices', function(req, res, next) {
  res.render('addServices' , { user: req.user});
    email= req.body.user.email;
  console.log("addiinggggg");
});
router.get('/updating',  function(req, res, next) { //servicesConfig.UpdateServices,
  res.render('updates');
  console.log("updating");
});

router.get('/update/:id' , servicesConfig.UpdateServices, function(req, res, next)
{
  console.log("update index");
});

router.get('/signupCust', function(req, res, next) {
  res.render('signupCust', { message: req.flash('loginMessage') });
  console.log("signup customer");
});

router.get('/loginCust', function(req, res, next) {
  res.render('logincust' , { message: req.flash('loginMessage') });
  console.log("login customer");
});

router.get('/profileCust', function(req, res, next) {
  res.render('profileCust' , { user: req.user });
  console.log("view profile of customer");
});

router.post('/reviews' , reviewsConfig.writeReview , function(req, res, next)
{
  console.log(" revieww addedd");
});

router.get('/reviews'  , function(req, res, next) {
  res.render('reviews');
  console.log("add The reviewss");
});

router.get('/allReviews', reviewsConfig.viewAllReviews , function(req, res, next) {
//  res.render('allReviews');
  console.log("view The reviewss men index");
});


router.get('/requests', Request.getAllRequests , function(req, res, next) {
  res.render('Requested');
  console.log("view The requests");
});

router.get('/verify/:id' , Request.verifyRequest, function(req, res, next)
{
  console.log("verifiedd");
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


router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true,
}));


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
