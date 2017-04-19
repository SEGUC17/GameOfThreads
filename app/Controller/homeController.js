let Client = require('../Model/user');
//let Work = require('../model/work');
//let User = require('../model/user');

let homeController = {

    getAllClients: function(req, res){

    	if(req.query.search){

    		//console.log("search");
          //  eval(require('locus'));

    		//Client.find({Buisness_name: new RegExp('^'+req.query.search+'$', "i")}, function(err, searchresults) {
          Client.findOne({ 'local.Buisness_name':  req.query.search }, function(err, searchresults) {
  				 if(err)

	                res.send(err.message);

	            else{
                if(searchresults == null){
                  console.log("No Results");
                  res.json("There are no results matching your search. Please try again.");
                }
                  else
                    console.log("Search Result: " + searchresults);
                  res.json(searchresults);
                 // res.render('search.ejs', {searchresults, pagetitle: "Home", user : req.user, search: req.query.search});
}
			});

    	} else{

    		console.log("no search");
            //eval(require('locus'));

	         Client.find(function(err, clients) {

  				 if(err)
	                res.send(err.message);
	            else
	             //  	res.render('search.ejs', {clients, pagetitle: "Home", user : req.user});
             res.json(clients);

			});

    	}

    }

}

module.exports = homeController;
