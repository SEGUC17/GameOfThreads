
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
