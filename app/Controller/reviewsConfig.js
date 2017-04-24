let Review = require('../Model/review');
let User = require('../Model/user');


let reviewController = {

    writeReview:function(req, res){
        let review = new Review(req.body);

        review.save(function(err, review){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
                res.redirect('/profileCust');
                console.log(review);
                console.log("review posted");
} })

} ,
viewAllReviews:function(req, res){
    Review.find(function(err, reviews){

        if(err)
            res.send(err.message);
        else{
            res.send(reviews);
            console.log(reviews);
           console.log("Method valid");
          }
    })


  }
}

module.exports = reviewController;
