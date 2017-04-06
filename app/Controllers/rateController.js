let rating = require('../model/rating');

let rateController = {

    	rateService:function(req, res){
        let rating = new rating(req.body); // mafrood adakhel eh parameter?

        rating.save(function(err, rating){ // err ??????
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(rate);
                
            }
        })
    }
}

module.exports = rateController;
