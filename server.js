//Express
var express = require('express');
var app = express() , handlebars;
var server = require("http").createServer(app)
var io = require("socket.io").listen(server)
var _ = require("underscore")
var html = require ("html");
//Cookie and session
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(express.static(__dirname + '/public'));
app.set('view engine','html');
//Passport
var passport = require('passport');
var passportC = require('passport');
require('./app/Controller/passport')(passport); // pass passport for configuration
require('./app/Controller/customerConfig')(passportC);

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
//stripe
var stripe = require("stripe")("sk_test_0wLgiF1ZwwIyJooEn4hiFuBt");
//var app = express(), handlebars;
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

app.engine('html', handlebars.engine);

app.get('/pay', function(req,res){
	res.render('index',{

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
});
//soket chat
var server = require ('http').createServer (app);
var io = require ('socket.io').listen(server);
users= [];
connections= [];


//open a connection with socket.io
io.sockets.on ('connection', function(socket){
    connections.push(socket);
    console.log('connected: %s sockets connected', connections.length);

//Disconnect
socket.on('disconnect', function(data){

  users.splice(users.indexOf(socket.username),1);
  updateUsernames();
  connections.splice(connections.indexOf(socket),1);
  console.log('Disconnected: %s sockets connected', connections.length);


});

// Send message
socket.on('send message', function(data){
  console.log(data);
  io.sockets.emit('new message', {msg: data, user: socket.username});
});

//New User
socket.on('new user', function(data, callback){
  callback(true);
  socket.username = data;
  users.push(socket.username);
  updateUsernames();
});

function updateUsernames(){
  io.sockets.emit('get users', users);
}

});
//Body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true}));
// routes ======================================================================
require('./app/routes.js')(app, passport , passportC); // load our routes and pass in our app and fully configured passport


app.listen(9999);
