var db = require("./Model");
var express = require('express');
var servicesConfig = require('./Controller/serviceCONFIG.js');
var reviewsConfig = require('./Controller/reviewsConfig.js');
var Request = require('./Controller/Requests.js');
var homeController= require('./Controller/homeController');
var viewServiceProviders = require('./Controller/viewServiceProviders');



module.exports = function(app, passport , passportC) {


    app.use(function(req , res , next){
      res.header("Access-Control-Allow-origin" , "*");
      res.header("Access-Control-Allow-Headers" , "origin, X-Requested-with, Content-Type, Accept");
      next();
    });
  app.use(express.static(__dirname + '/../'));

  app.get('/', function(req, res) {
    res.sendFile( 'index.html'); // load the single view file (angular will handle the page changes on the front-end)
    console.log("START");
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
  

  app.get('/requests', Request.getAllRequests , function(req, res, next) {
  res.render('Requested');
  console.log("view The requests");
  });

  app.get('/verify/:id' , Request.verifyRequest, function(req, res, next)
  {
  console.log("verifiedd");
  });

  app.get('/search',homeController.getAllClients);

  app.get('/viewAllClients', viewServiceProviders.getSP, function(req, res, next)
  {// res.json({ user: req.user});
    console.log("view clients");
  });
  app.route('/auth/facebook').get(passport.authenticate('facebook', { scope: ['email']}));
  // router.get('/auth/facebook', passport.authenticate('facebook'));
  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback',passport.authenticate('facebook',
  {successRedirect : '/profile',
      failureRedirect : '/'
    }));

//adding new service or packages of Business-provider
    app.post('/service' , servicesConfig.postMyService);



//fetching and showing all of the services of all business provider
/*    app.get('/BusinessPackages' ,  servicesConfig.getAllServices, function(req, res, next) {
      console.log("routes method"); //, servicesConfig.viewMyServices
    });*/
//viewing the only my services as business
    app.get('/BusinessPackages' ,  servicesConfig.viewMyServices, function(req, res, next) {
      console.log("routes method"); //, servicesConfig.viewMyServices
    });
    //deleting one of my services as business provider
    app.post('/delete' , servicesConfig.DeleteService, function(req, res, next)
    {
      console.log("deletted");
    });
    // updating any of my services
    app.post('/update' , servicesConfig.UpdateServices, function(req, res, next)
    {
      console.log("update index");
    });
    app.post('/reviews' , reviewsConfig.writeReview , function(req, res, next)
    {
      console.log(" revieww addedd");
    });
    app.get('/allReviews', reviewsConfig.viewAllReviews , function(req, res, next) {
    //  res.render('allReviews');
      console.log("view The reviewss men index");
    });
};
