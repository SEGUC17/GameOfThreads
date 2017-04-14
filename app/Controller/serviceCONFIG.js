
let Service = require('../Model/service.js');
let User = require('../Model/user.js');
let Customer = require('../Model/customer.js');


let serviceController = {

    postMyService:function(req, res){
        let service = new Service(req.body);

        service.save(function(err, service){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
                res.redirect('/myservices');
                console.log(service);
                console.log("service posted");
} })
    },

  viewMyServices:function( req , res){

      Service.find( { email : req.user.local.email } , function(err, services){

                if (err){
                    res.send(err.message);
                  }
                    else
                        res.render('myservices' ,{services});
                        console.log("method viewing");

            })

    },
    getAllServices:function(req, res){

        Service.find(function(err, services){

            if(err)
                res.send(err.message);
            else
                res.render('myservices', {services});
        })
    },

    DeleteService:function (req, res) {
      //var uid = req.params.service_id;
  Service.findOneAndRemove(req.params.id , //findOneAndRemove
function(err ,service){

  console.log(req.params.id +   "  request");

    if (err){
     res.render('error')
     console.log("errorrrrrr");
     //res.send(500, err)
   }
   else{

        console.log("dellll");
     res.redirect('/myservices')  }
 })
} ,


UpdateServices:function( req  ,  res){
        var Newservices = req.body;
        var service_ID = req.params.id ;
        Service.update( service_ID , Newservices, function(err, service) {
          console.log(req.params.id +   "  request");

            if (!err) {
                res.render('index')
              //  res.json("okay");

            } else {
                res.write("fail");
            }
        });
    }
    // view
    /*  Get(function(req, res) {
            var id = req.params.user_id;
            Value.find({'user_id':id}, function(err, value) {
                if (!err) {
                    res.send(value);
                } else {
                    res.write("fail");
                }
            });
        })


   UpdateServices:function( req  ,  res){
var query = {services : req.service};
req.newData = req.service;
Service.findOneAndUpdate( query , req.newData , {upser : true} , function(err , doc){
if (err){
  res.render('error');
}
else {/*
  Service.Service_Name = req.body.Service_Name;
  Service.Service_Description = req.body.Service_Description;
  Service.Price = req.body.Price;

  Service.update(function(err, service){
      if(err){
          res.send(err.message)
          console.log(err);
      }
      else
          res.redirect('/myservices');
          console.log(req.body);
          console.log("service upp");
//}
//  });
}

});
}
*/
}

module.exports = serviceController;
