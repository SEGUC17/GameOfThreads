let Client = require('../model/client');
//let Work = require('../model/work');
//let User = require('../model/user');

let homeController = {

    getAllClients: function(req, res){

    	if(req.query.search){

    		console.log("search");
          //  eval(require('locus'));

    		Client.find({name: new RegExp('^'+req.query.search+'$', "i")}, function(err, searchresults) {

  				 if(err)

	                res.send(err.message);

	            else

	                res.render('search.ejs', {searchresults, pagetitle: "Home", user : req.user, search: req.query.search});

			});

    	} else{

    		console.log("no search");
            //eval(require('locus'));

	         Client.find(function(err, clients) {

  				 if(err)

	                res.send(err.message);

	            else	            	

	               	res.render('search.ejs', {clients, pagetitle: "Home", user : req.user});

			});

    	}

    }

}

module.exports = homeController;