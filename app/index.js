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

// PROFILE SECTION =========================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
router.get('/Fprofile', isLoggedIn, function(req, res) {
  res.render('Fprofile.ejs', {
    user : req.user // get the user out of session and pass to template
  });
});

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login




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

// process the login form as Business
app.post("/login", passport.authenticate('local-login'), function(req, res) {
  res.json(req.user);
});

// handle logout as Business
app.post("/logout", function(req, res) {
  req.logOut();
  res.send(200);
})

// loggedin as business
app.get("/loggedin", function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

// signup as business
app.post("/signup", function(req, res) {
db.User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (user) {
      res.json(null);
      return;
    } else {
      var newUser = new db.User();
      newUser.Business_Name = req.body.Business_Name;
      newUser.Business_Location = req.body.Business_Location;
      newUser.Business_website = req.body.Business_website;
      newUser.created_at = req.body.created_at;
      newUser.email = req.body.email;
      newUser.password = newUser.generateHash(req.body.password);
      newUser.save(function(err, user) {
        req.login(user, function(err) {
          if (err) {
            return next(err);
          }
          res.json(user);
        });
      });
    }
  });
});

// process the login form for customer
app.post("/loginCust", passportC.authenticate('local-loginCust'), function(req, res) {
  res.json(req.customer);
});

// handle logout for customer
app.post("/logoutCust", function(req, res) {
  req.logOut();
  res.send(200);
})

// loggedin for customer
app.get("/loggedinCust", function(req, res) {
  res.send(req.isAuthenticated() ? req.customer : '0');
});
    // signup customerr
    app.post("/signupCust", function(req, res) {
      db.Customer.findOne({
        email: req.body.email
      }, function(err, customer) {
        if (customer) {
          res.json(null);
          return;
        } else {
          var newCustomer = new db.Customer();
          newCustomer.Name = req.body.Name;
          newCustomer.Address = req.body.Address;
          newCustomer.PhoneNumber = req.body.PhoneNumber;
          newCustomer.email = req.body.email;
          newCustomer.password = newCustomer.generateHash(req.body.password);
          newCustomer.save(function(err, newCustomer) {
            req.login(newCustomer, function(err) {
              if (err) {
                return next(err);
              }
              res.json(newCustomer);
            });
          });
        }
      });
    });

module.exports = router;
