var express = require('express');  
var router = express.Router();

//router.get("/", function(req, res) {  
// res.render('search');
//});

let Client =  require('../app/Model/user');

var homeController = require('../app/Controller/homeController');
router.get('/search', homeController.getAllClients);

//let Campground 		= require('../app/model/campground');
//let User 		= require('../app/model/user');
//let Work 		= require('../app/model/work');

module.exports = router;


// frontend routes =========================================================
	// route to handle all angular requests
// Node backend will send any user that visits application to index.html file 




// app.get('/', function(req, res) {
// 		res.sendFile(path.join(__dirname + '/public/main.html');
// 	});
