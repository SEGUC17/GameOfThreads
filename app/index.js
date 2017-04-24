var express = require('express');
//Project attribute
var router = express.Router();

var passport = require('passport');
var passportC = require('passport');

var servicesConfig = require('./Controller/serviceCONFIG.js');
var reviewsConfig = require('./Controller/reviewsConfig.js');
var Request = require("./Controller/Requests.js");

var homeController= require('./Controller/homeController');
router.get('/search',homeController.getAllClients);



var viewServiceProviders = require('./Controller/viewServiceProviders');
router.get('/viewAllClients', viewServiceProviders.getSP, function(req, res, next)
{
  console.log("view clients");
});


// router.get('/', function(req, res) {
//   res.render('index');
//   console.log("START");
// });


router.use(express.static(__dirname+'/../'));  
 router.get('/', function(req, res) {  
  res.sendFile('index.html');   
  console.log("START"); });



// show the login form
router.get('/Flogin', function(req, res) {

  // render the page and pass in any flash data if it exists
  res.render('Fsignup.ejs', { message: req.flash('loginMessage') });
});

// process the login form
router.post('/Flogin', passport.authenticate('local-login', {
  successRedirect : '/Fprofile', // redirect to the secure profile section
  failureRedirect : '/Flogin', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));
router.get('/Fsignup', function(req, res) {

  // render the page and pass in any flash data if it exists
  res.render('Fprofile.ejs', { message: req.flash('signupMessage') });
});

// process the signup form
router.post('/Fsignup', passport.authenticate('local-signup', {
  successRedirect : '/Fprofile', // redirect to the secure profile section
  failureRedirect : '/Fsignup', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));





router.route('/auth/facebook').get(passport.authenticate('facebook', { scope: ['email']}));
// router.get('/auth/facebook', passport.authenticate('facebook'));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',passport.authenticate('facebook', {successRedirect : '/profile',
    failureRedirect : '/'
  }));

  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
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

router.post('/update' , servicesConfig.UpdateServices, function(req, res, next)
{
  console.log("update index");
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


// handle logout as Business
router.post("/logout", function(req, res) {
  req.logOut();
  res.send(200);
})



module.exports = router;
