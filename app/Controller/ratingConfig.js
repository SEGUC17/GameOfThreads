let Rating = require('../Model/rating.js');


let ratingController = {

    giveRating:function(req, res){
        let rating = new Rating(req.body);

        rating.save(function(err, rating){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
                res.redirect('/profileCust');
                console.log(rating);
                console.log("ratess");
} })

}
}

module.exports = ratingController;
