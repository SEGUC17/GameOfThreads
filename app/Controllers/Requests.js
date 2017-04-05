
let User = require('../Models/model');



let requestControllers = {

    getAllRequests:function(req, res){

      User.findOne({Flag : false } , function(err, users) {

            if(err)
                res.send(err.message);
            else

                res.render('Requested', {users});
        })
    }
  }


module.exports = requestControllers;
