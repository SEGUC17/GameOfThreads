//dependencies
var express = require ('express');
var mongoose = require ('mongoose');
var bodyParser= require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var upload = multer({dest:__dirname+'./app/index'});
//var RedisStore = require('connect-redis')(express);

//??
var path = require('path');
var favicon = require('serve-favicon');

var passport = require('passport');
var passportC = require('passport');

var LocalStrategy = require('passport-local').Strategy;

var flash = require('connect-flash');
var session = require('express-session');

var routes = require('./app/routes.js');
//var users = require('./routers/users');

var app = express();
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/myNewDB");

app.set('views', __dirname + '/Views');
app.set('view engine', 'ejs');
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'shhsecret'  , resave: true,
  saveUninitialized: true,}));

    app.use(passport.initialize());
    app.use(passport.session());


    app.use(flash());

    require('./app/Controller/passport')(passport); //????
   require('./app/Controller/customerConfig.js')(passportC); //????


    app.use('/', routes);

    app.listen(3000 , function(){
    console.log("Degwii running at 3000..!!");
    });
