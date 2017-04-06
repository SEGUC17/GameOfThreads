
let Service = require('../Model/service.js');

let serviceController = {

   viewMyServices:function( req , res){

      Service.find( { Buisness_name :req.body.Buisness_name} , function(err, services){

                if (err){
                    res.send(err.message);
                  }
                    else
                        res.render('myservices' ,{services});
                        console.log("method viewing");

            })

    },


   DeleteService:function (req, res) {
Service.findOneAndRemove(req.params.id , //findOneAndRemove
function(err ,service){

console.log(req.params.id +   "  request");

  if (err){
   res.render('error')
   console.log("error");
 }
 else{

      console.log("deleted");
   res.redirect('/myservices')  }
})
}

}

module.exports = serviceController;
