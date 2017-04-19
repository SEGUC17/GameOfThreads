
let User = require('../Model/user');


let requestControllers = {

    getAllRequests:function(req, res ){
User.find({}).exec(function( err , users){
  if (err)
  {
    console.log("error fel method");  }
    else {
      res.json('users' , {
        "users": users
      });
      //console.log(users);

    }
});



      User.find( { Flag : false } , function(err , users) {
var userMap = {};
users.forEach(function(user){
  userMap[user._id] = user ;
});
res.render('Requested' , {userMap});
console.log(userMap);
//res.send(userMap);
    });
  },

  verifyRequest:function (req, res) {
    //var uid = req.params.service_id;
User.findOne(req.params.id , //findOneAndRemove
function(err ,users){

console.log(req.params.id +   " the user id ");

  if (err){
   res.render('error')
   console.log("errorrrrrr");
   //res.send(500, err)
 }
 else{
     Flag = true;
      console.log("Verifying the request");
   res.redirect('/Requested')  }
})

}
}


module.exports = requestControllers;
