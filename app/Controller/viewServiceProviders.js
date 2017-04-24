
var Client = require('mongoose').model('User');

let clientController = {
	getSP: function(req, res){
		Client.find({}).exec(function(err, clients){
			if(err)
				res.send(err.message);
			else{
				console.log(clients)
				res.send(clients);
		}
	})
	}
 }
module.exports = clientController;
