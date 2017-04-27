//Express
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine','html');
//app.set('views',__dirname + '/public');
//stripe
var stripe = require("stripe")("sk_test_0wLgiF1ZwwIyJooEn4hiFuBt");
var hbs = require("hbs");
 exphbr   = require('express3-handlebars'),

  handlebars = exphbr.create({
    defaultView: 'payment',

    extname      : '.html', //set extension to .html so handlebars knows what to look for

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        'views/payment/',
        'views/paysuccess/'
    ]
});
//Passport
var passport = require('passport');
var passportC = require('passport');
require('./app/Controller/passport')(passport); // pass passport for configuration
require('./app/Controller/customerConfig')(passportC);
//Cookie and session
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(session({
  secret: 'this is the secret'
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.engine('html', handlebars.engine);


var flash = require('connect-flash');
var path = require('path');
var favicon = require('serve-favicon');
app.use(flash());


//Body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
}));

// routes ======================================================================
require('./app/routes.js')(app, passport , passportC); // load our routes and pass in our app and fully configured passport


app.listen(9999);
