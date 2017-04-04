
let Service = require('../Model/service.js');

let serviceController = {

  viewMyServices:function( req  ,  res){

      Service.find( { Buisness_name :req.body.Buisness_name} , function(err, services){

                if (err){
                    res.send(err.message);
                  }
                    else
                        res.render('myservices' ,{services});
                        console.log("method viewing");

            })

    }

}

module.exports = serviceController;
