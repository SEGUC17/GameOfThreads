let Client = require('../Model/user');

let clientController = {
	getSP: function(req, res){
		Client.find(function(err, clients){
			if(err)
				re.send(err.message);
			else
				res.json(clients);
		})
	}


 }


module.exports = clientController;