var express = require('express');  
var router = express.Router();

//router.get("/", function(req, res) {  
// res.render('search');
//});

let Client =  require('../app/Models/user');

var homeController = require('../app/controller/homeController');
router.get('/search', homeController.getAllClients);

//let Campground 		= require('../app/model/campground');
//let User 		= require('../app/model/user');
//let Work 		= require('../app/model/work');

module.exports = router;