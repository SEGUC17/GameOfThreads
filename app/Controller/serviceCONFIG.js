
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
              res.redirect('/BusinessPackages');
              //res.json(service)
              console.log(service);
} })
    },

  viewMyServices:function(req, res){
            //  res.send(service);ySepasswordrvices:function( req , res){

      Service.find( { email : req.user.email } , function(err, services){

                if (err){
                    res.send(err);
                  }
                    else
                    res.send(services); // return all nerds in JSON format
                        console.log("method viewing");

            })

    },

    getAllServices:function(req, res){

        Service.find(function(err, services){

            if(err)
                res.send(err.message);
            else
                res.send(services);
                //res.senfile(BusinessPackages);
        })
    },

    DeleteService:function (req, res) {
      //var uid = req.params.service_id;
  Service.findOneAndRemove({Service_Name : req.body.Service_Name } , //findOneAndRemove
function(err ,service){

  console.log(req.body.Service_Name +   "  request to delete");

    if (err){
     res.render('error')
     console.log("errorrrrrr");
     //res.send(500, err)
   }
   else{

        console.log("delllleted");
       res.redirect('/BusinessPackages')  }
 })
} ,


UpdateServices:function( req  ,  res){
  var serviceName = req.body.oldServiceName
        var serviceUpdate = req.body.newdata;
        Service.update(  {Service_Name : serviceName }, serviceUpdate , function(err, service) {
          console.log( serviceUpdate +   "  request");

            if (!err) {
              console.log("errorrrrrr");
              //  res.json("okay");

            } else {
                res.write("fail");
            }
        });
    }
}

module.exports = serviceController;
