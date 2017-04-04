
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

     DeleteService:function (req, res) {
  Service.findOneAndRemove({ service_id : req.body.id }, 
function(err ,service){
    if (err){
     res.render('error')
     console.log("error");
 }
   else{
     res.redirect('/myservices')  }
 })
}

}

module.exports = serviceController;
