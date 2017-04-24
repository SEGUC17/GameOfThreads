//Express
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

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
/*
var server = require ('http').createServer(app);
var io = require ('socket.io').listen (server);
users = [];
connections = [];


var app = express(),handlebars;
var hbs = require("hbs");
 exphbr   = require('express3-handlebars'),

  handlebars = exphbr.create({
    defaultView: 'index',

    extname      : '.html', //set extension to .html so handlebars knows what to look for

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        'views/index/',
        'views/paysuccess/'
    ]
});

app.get('/paySuccess', function(req,res){
    		res.render('paysuccess',{
    	});
    });
    app.post('/charge',function(req,res){
	var token = req.body.stripeToken;
	var chargeAmount = req.body.chargeAmount;
	var charge = stripe.charges.create({
		amount:chargeAmount,
		currency:"gbp",
		source:token,
	},function(err,charge){
		if(err ==="StripeCardError"){
			console.log("Card Declined");
		}
	});
	console.log("success")
	res.redirect('/paysuccess');
});
//Load .env file
*/
// routes ======================================================================
require('./app/routes.js')(app, passport , passportC); // load our routes and pass in our app and fully configured passport


app.listen(9999);
